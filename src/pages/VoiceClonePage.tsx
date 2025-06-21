import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { apiPost, apiGet, apiDelete, apiPatch } from '../utils/api';
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

interface VoiceClone {
  id: number;
  name?: string;
  status?: string;
  created_at?: string;
}

const VoiceClonePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [clones, setClones] = useState<VoiceClone[]>([]);
  const [clonesLoading, setClonesLoading] = useState(true);
  const [clonesError, setClonesError] = useState<string | null>(null);
  const [renamingId, setRenamingId] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const { toast } = useToast();

  const fetchClones = async () => {
    setClonesLoading(true);
    setClonesError(null);
    try {
      const token = localStorage.getItem('token');
      const data = await apiGet('/voice-clone/', token);
      setClones(data.results || data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setClonesError(err.message || 'Failed to fetch voice clones');
      } else {
        setClonesError('Failed to fetch voice clones: An unknown error occurred');
      }
    } finally {
      setClonesLoading(false);
    }
  };

  useEffect(() => {
    fetchClones();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an audio file to clone.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const token = localStorage.getItem('token');
      await apiPost('/voice-clone/', formData, token, true);
      toast({
        title: "Voice clone request submitted!",
        description: "Your voice clone is being processed.",
      });
      setFile(null);
      fetchClones();
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          title: "Voice clone failed",
          description: err.message || "An error occurred while cloning your voice.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Voice clone failed",
          description: "An unknown error occurred while cloning your voice.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setActionLoading(id);
    const originalClones = [...clones];
    const deletedClone = clones.find((c: VoiceClone) => c.id === id);

    setClones(prev => prev.filter(c => c.id !== id)); // Optimistic UI update

    try {
      const token = localStorage.getItem('token');
      await apiDelete(`/voice-clone/${id}/`, token);
      toast({
        title: "Voice clone deleted!",
        description: "Your voice clone has been successfully deleted.",
        action: (
          <ToastAction altText="Undo" onClick={() => handleUndoDelete(deletedClone)}>
            Undo
          </ToastAction>
        ),
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          title: "Failed to delete voice clone.",
          description: err.message || "An error occurred while deleting the voice clone.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to delete voice clone.",
          description: "An unknown error occurred while deleting the voice clone.",
          variant: "destructive",
        });
      }
      setClones(originalClones); // Revert on error
    } finally {
      setActionLoading(null);
    }
  };

  const handleUndoDelete = (deletedClone: VoiceClone | undefined) => {
    if (deletedClone) {
      setClones(prev => [...prev, deletedClone].sort((a, b) => a.id - b.id)); // Re-add and sort
      toast({
        title: "Undo successful!",
        description: "The voice clone has been restored.",
      });
    }
  };

  const handleRename = async (id: number) => {
    if (!renameValue.trim()) {
      toast({
        title: "Rename failed",
        description: "Voice clone name cannot be empty.",
        variant: "destructive",
      });
      return;
    }
    setActionLoading(id);
    const originalClones = [...clones];
    const cloneToRenameIndex = clones.findIndex(c => c.id === id);
    const originalName = clones[cloneToRenameIndex]?.name;

    // Optimistic UI update for rename
    setClones(prev => prev.map(c => c.id === id ? { ...c, name: renameValue } : c));

    try {
      const token = localStorage.getItem('token');
      await apiPatch(`/voice-clone/${id}/`, { name: renameValue }, token);
      toast({
        title: "Voice clone renamed!",
        description: "The voice clone name has been updated.",
      });
      setRenamingId(null);
      setRenameValue('');
      // No need to fetch clones again if optimistic update is successful
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          title: "Failed to rename voice clone.",
          description: err.message || "An error occurred while renaming the voice clone.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to rename voice clone.",
          description: "An unknown error occurred while renaming the voice clone.",
          variant: "destructive",
        });
      }
      // Revert on error
      setClones(originalClones.map(c => c.id === id ? { ...c, name: originalName } : c));
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">AI <span className="gradient-text">Voice Clone</span></h1>
        <p className="page-description">Upload a sample to clone your voice for translated content.</p>
      </div>
      <section className="section-padding">
        <div className="container mx-auto max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border border-t1-textSecondary/10 dark:border-white/10">
            {/* {error && <div className="text-red-500 text-center">{error}</div>}
            {success && <div className="text-green-500 text-center">{success}</div>} */}
            <div>
              <label className="block mb-2 font-medium">Audio File</label>
              <Input type="file" accept="audio/*" onChange={e => setFile(e.target.files?.[0] || null)} disabled={loading} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Uploading...' : 'Clone Voice'}</Button>
          </form>
        </div>
        <div className="container mx-auto max-w-xl mt-10">
          <h2 className="text-lg font-semibold mb-4">Your Voice Clones</h2>
          {clonesLoading && <div className="text-center py-4">Loading...</div>}
          {clonesError && <div className="text-center py-4 text-red-500">{clonesError}</div>}
          {!clonesLoading && !clonesError && clones.length === 0 && (
            <div className="text-center py-4 text-t1-textSecondary">No voice clones found.</div>
          )}
          {!clonesLoading && !clonesError && clones.length > 0 && (
            <div className="space-y-2">
              {clones.map((clone: VoiceClone) => (
                <div key={clone.id} className="p-3 border rounded bg-card flex flex-col gap-1">
                  <div className="flex justify-between items-center gap-2">
                    {renamingId === clone.id ? (
                      <>
                        <Input
                          value={renameValue}
                          onChange={e => setRenameValue(e.target.value)}
                          className="w-32 inline-block mr-2"
                          size={10}
                          disabled={actionLoading === clone.id}
                        />
                        <Button size="sm" variant="outline" onClick={() => handleRename(clone.id)} disabled={actionLoading === clone.id}>
                          Save
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => setRenamingId(null)} disabled={actionLoading === clone.id}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <span className="font-medium">{clone.name || `Voice Clone #${clone.id}`}</span>
                        <Button size="sm" variant="outline" onClick={() => { setRenamingId(clone.id); setRenameValue(clone.name || ''); }}>
                          Rename
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="destructive" disabled={actionLoading === clone.id}>
                              {actionLoading === clone.id ? 'Deleting...' : 'Delete'}
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This voice clone will be permanently deleted.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(clone.id)}>
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </>
                    )}
                  </div>
                  <div className="flex gap-4 text-xs text-t1-textSecondary mt-1">
                    <span>Status: {clone.status || 'created'}</span>
                    {clone.created_at && <span>Created: {new Date(clone.created_at).toLocaleString()}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VoiceClonePage; 