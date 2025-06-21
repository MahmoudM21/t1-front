import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Search, FileVideo, FileAudio, Clock, Download, ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';
import { apiGet, apiDelete } from '../utils/api';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface VideoJob {
  id: number;
  title?: string;
  type?: string;
  status?: string;
  thumbnail?: string;
  originalLanguage?: string;
  targetLanguage?: string;
  duration?: string;
  download_url?: string;
  subtitle_url?: string;
}

const TRANSLATION_STATUS = {
  COMPLETED: 'completed',
  PROCESSING: 'processing',
  FAILED: 'failed'
};

const HistoryPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [translations, setTranslations] = useState<VideoJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const { toast } = useToast();

  const fetchHistory = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const data = await apiGet('/videos/history/', token);
      setTranslations(data.results || data); // adjust if API returns differently
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to fetch history');
      } else {
        setError('Failed to fetch history: An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleDelete = async (id: number) => {
    setActionLoading(id);
    const originalTranslations = [...translations];
    const deletedTranslation = translations.find((t: VideoJob) => t.id === id);

    setTranslations(prev => prev.filter(t => t.id !== id)); // Optimistic UI update

    try {
      const token = localStorage.getItem('token');
      await apiDelete(`/videos/upload/${id}/`, token);
      toast({
        title: "Video job deleted!",
        description: "Your video translation job has been successfully deleted.",
        action: (
          <ToastAction altText="Undo" onClick={() => handleUndoDelete(deletedTranslation)}>
            Undo
          </ToastAction>
        ),
      });
      // No need to fetch history again if using optimistic update and undo
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          title: "Failed to delete video job.",
          description: err.message || "An error occurred while deleting the video job.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to delete video job.",
          description: "An unknown error occurred while deleting the video job.",
          variant: "destructive",
        });
      }
      setTranslations(originalTranslations); // Revert on error
    } finally {
      setActionLoading(null);
    }
  };

  const handleUndoDelete = (deletedTranslation: VideoJob | undefined) => {
    if (deletedTranslation) {
      setTranslations(prev => [...prev, deletedTranslation].sort((a, b) => a.id - b.id)); // Re-add and sort
      toast({
        title: "Undo successful!",
        description: "The video job has been restored.",
      });
    }
  };

  const getStatusBadgeClasses = (status: string) => {
    switch(status) {
      case TRANSLATION_STATUS.COMPLETED:
        return 'bg-green-500/20 text-green-500 dark:bg-green-500/10 dark:text-green-400';
      case TRANSLATION_STATUS.PROCESSING:
        return 'bg-t1-accentBlue/20 text-t1-accentBlue dark:bg-t1-accentBlue/10 dark:text-t1-accentLight animate-pulse';
      case TRANSLATION_STATUS.FAILED:
        return 'bg-red-500/20 text-red-500 dark:bg-red-500/10 dark:text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  const filteredTranslations = translations.filter(translation => {
    if (filter !== 'all' && translation.type !== filter) {
      return false;
    }
    if (searchQuery && !translation.title?.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">
          Translation <span className="gradient-text">History</span>
        </h1>
        <p className="page-description">
          View and manage your previous translation projects.
        </p>
      </div>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="w-full sm:w-auto">
                <ToggleGroup type="single" value={filter} onValueChange={(value) => value && setFilter(value)} className="border border-t1-textSecondary/10 dark:border-white/10 rounded-md">
                  <ToggleGroupItem value="all" aria-label="All translations">All</ToggleGroupItem>
                  <ToggleGroupItem value="video" aria-label="Video translations">
                    <FileVideo className="mr-1 h-4 w-4" />
                    Videos
                  </ToggleGroupItem>
                  <ToggleGroupItem value="audio" aria-label="Audio translations">
                    <FileAudio className="mr-1 h-4 w-4" />
                    Audio
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-t1-textSecondary dark:text-white/60" />
                <Input
                  placeholder="Search translations..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            {/* Loading/Error States */}
            {loading && <div className="text-center py-8">Loading...</div>}
            {error && <div className="text-center py-8 text-red-500">{error}</div>}
            {/* Translations List */}
            <div className="space-y-4">
              {!loading && !error && filteredTranslations.length > 0 ? (
                filteredTranslations.map((translation) => (
                  <div
                    key={translation.id}
                    className="p-4 border border-t1-textSecondary/10 dark:border-white/10 rounded-lg bg-card hover:border-t1-accentBlue/30 dark:hover:border-t1-accentBlue/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Thumbnail or Icon */}
                      <div className="sm:w-48 h-28 bg-t1-accentBlue/5 dark:bg-t1-accentBlue/10 rounded-md overflow-hidden flex-shrink-0">
                        {translation.thumbnail ? (
                          <img
                            src={translation.thumbnail}
                            alt={translation.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            {translation.type === 'video' ? (
                              <FileVideo className="h-10 w-10 text-t1-textSecondary dark:text-white/40" />
                            ) : (
                              <FileAudio className="h-10 w-10 text-t1-textSecondary dark:text-white/40" />
                            )}
                          </div>
                        )}
                      </div>
                      {/* Details */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                          <h3 className="text-lg font-medium">{translation.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClasses(translation.status)}`}>
                            {translation.status?.charAt(0).toUpperCase() + translation.status?.slice(1)}
                          </span>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button size="sm" variant="destructive" disabled={actionLoading === translation.id}>
                                {actionLoading === translation.id ? 'Deleting...' : <><Trash2 className="h-4 w-4 mr-1" />Delete</>}
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This video job will be permanently deleted.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDelete(translation.id)}>
                                  Continue
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-t1-textSecondary dark:text-t1-textSecondary mb-4">
                          <div>
                            <span className="block">Languages</span>
                            <span>{translation.originalLanguage} → {translation.targetLanguage}</span>
                          </div>
                          <div>
                            <span className="block">Duration</span>
                            <span>{translation.duration}</span>
                          </div>
                          {translation.status === TRANSLATION_STATUS.COMPLETED && translation.download_url && (
                            <div>
                              <Button asChild size="sm" variant="outline" className="text-xs">
                                <a href={translation.download_url} target="_blank" rel="noopener noreferrer">
                                  <Download className="h-3 w-3 mr-1" />
                                  Download
                                </a>
                              </Button>
                            </div>
                          )}
                          {translation.status === TRANSLATION_STATUS.COMPLETED && translation.subtitle_url && (
                            <div>
                              <Button asChild size="sm" variant="outline" className="text-xs">
                                <a href={translation.subtitle_url} target="_blank" rel="noopener noreferrer">
                                  Subtitles
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : null}
              {!loading && !error && filteredTranslations.length === 0 && (
                <div className="text-center py-8 text-t1-textSecondary">No translations found.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
