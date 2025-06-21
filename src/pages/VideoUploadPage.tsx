import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { apiPost } from '../utils/api';

const ELEVENLABS_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'pl', name: 'Polish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'tr', name: 'Turkish' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'sv', name: 'Swedish' },
  { code: 'fi', name: 'Finnish' },
  { code: 'da', name: 'Danish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'el', name: 'Greek' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'cs', name: 'Czech' },
  { code: 'ro', name: 'Romanian' },
  { code: 'sk', name: 'Slovak' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'hr', name: 'Croatian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'lv', name: 'Latvian' },
  { code: 'et', name: 'Estonian' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'he', name: 'Hebrew' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'th', name: 'Thai' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'bn', name: 'Bengali' },
  { code: 'fa', name: 'Persian' },
  { code: 'sw', name: 'Swahili' },
  { code: 'fil', name: 'Filipino' },
  { code: 'ca', name: 'Catalan' },
  { code: 'sr', name: 'Serbian' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'eu', name: 'Basque' },
  { code: 'gl', name: 'Galician' },
  { code: 'is', name: 'Icelandic' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'mt', name: 'Maltese' },
  { code: 'sq', name: 'Albanian' },
  { code: 'be', name: 'Belarusian' },
  { code: 'bs', name: 'Bosnian' },
  { code: 'cy', name: 'Welsh' },
  { code: 'ga', name: 'Irish' },
  { code: 'lb', name: 'Luxembourgish' },
  { code: 'mn', name: 'Mongolian' },
  { code: 'af', name: 'Afrikaans' },
  { code: 'zu', name: 'Zulu' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'st', name: 'Southern Sotho' },
  { code: 'tn', name: 'Tswana' },
  { code: 'ss', name: 'Swati' },
  { code: 've', name: 'Venda' },
  { code: 'nr', name: 'South Ndebele' },
  { code: 'ts', name: 'Tsonga' },
  { code: 'nso', name: 'Northern Sotho' },
  { code: 'yo', name: 'Yoruba' },
  { code: 'ig', name: 'Igbo' },
  { code: 'ha', name: 'Hausa' },
  { code: 'am', name: 'Amharic' },
  { code: 'om', name: 'Oromo' },
  { code: 'so', name: 'Somali' },
  { code: 'rw', name: 'Kinyarwanda' },
  { code: 'ln', name: 'Lingala' },
  { code: 'kg', name: 'Kongo' },
  { code: 'sn', name: 'Shona' },
  { code: 'ny', name: 'Nyanja' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'my', name: 'Burmese' },
  { code: 'km', name: 'Khmer' },
  { code: 'lo', name: 'Lao' },
  { code: 'si', name: 'Sinhala' },
  { code: 'ne', name: 'Nepali' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ps', name: 'Pashto' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'mr', name: 'Marathi' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'or', name: 'Odia' },
  { code: 'as', name: 'Assamese' },
  { code: 'ks', name: 'Kashmiri' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'bho', name: 'Bhojpuri' },
  { code: 'mai', name: 'Maithili' },
  { code: 'sat', name: 'Santali' },
  { code: 'mni', name: 'Manipuri' },
  { code: 'kok', name: 'Konkani' },
  { code: 'doi', name: 'Dogri' },
  { code: 'brx', name: 'Bodo' },
  { code: 'lus', name: 'Mizo' },
  { code: 'lep', name: 'Lepcha' },
  { code: 'new', name: 'Newari' },
  { code: 'sdh', name: 'Southern Kurdish' },
  { code: 'ckb', name: 'Central Kurdish' },
  { code: 'ku', name: 'Kurdish' },
  { code: 'ug', name: 'Uyghur' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'ky', name: 'Kyrgyz' },
  { code: 'kk', name: 'Kazakh' },
  { code: 'uz', name: 'Uzbek' },
  { code: 'tg', name: 'Tajik' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'ka', name: 'Georgian' },
  { code: 'hy', name: 'Armenian' },
  { code: 'ab', name: 'Abkhaz' },
  { code: 'os', name: 'Ossetian' },
  { code: 'ce', name: 'Chechen' },
  { code: 'ba', name: 'Bashkir' },
  { code: 'cv', name: 'Chuvash' },
  { code: 'tt', name: 'Tatar' },
  { code: 'kv', name: 'Komi' },
  { code: 'udm', name: 'Udmurt' },
  { code: 'mhr', name: 'Meadow Mari' },
  { code: 'myv', name: 'Erzya' },
  { code: 'mdf', name: 'Moksha' },
  { code: 'chm', name: 'Mari' },
  { code: 'sah', name: 'Yakut' },
  { code: 'krc', name: 'Karachay-Balkar' },
  { code: 'kbd', name: 'Kabardian' },
  { code: 'ady', name: 'Adyghe' },
  { code: 'av', name: 'Avar' },
  { code: 'lez', name: 'Lezgi' },
  { code: 'tab', name: 'Tabasaran' },
  { code: 'dar', name: 'Dargwa' },
  { code: 'inh', name: 'Ingush' },
  { code: 'lbe', name: 'Lak' },
  { code: 'khv', name: 'Khvarshi' },
  { code: 'tyv', name: 'Tuvan' },
  { code: 'alt', name: 'Altai' },
  { code: 'xal', name: 'Kalmyk' },
  { code: 'tuv', name: 'Tuvinian' },
  { code: 'sco', name: 'Scots' },
  { code: 'gd', name: 'Scottish Gaelic' },
  { code: 'kw', name: 'Cornish' },
  { code: 'gv', name: 'Manx' },
  { code: 'yi', name: 'Yiddish' },
  { code: 'fo', name: 'Faroese' },
  { code: 'sm', name: 'Samoan' },
  { code: 'to', name: 'Tongan' },
  { code: 'fj', name: 'Fijian' },
  { code: 'mi', name: 'Maori' },
  { code: 'haw', name: 'Hawaiian' },
  { code: 'ty', name: 'Tahitian' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'rw', name: 'Kinyarwanda' },
  { code: 'rn', name: 'Kirundi' },
  { code: 'so', name: 'Somali' },
  { code: 'aa', name: 'Afar' },
  { code: 'ti', name: 'Tigrinya' },
  { code: 'ss', name: 'Swati' },
  { code: 've', name: 'Venda' },
  { code: 'ts', name: 'Tsonga' },
  { code: 'tn', name: 'Tswana' },
  { code: 'st', name: 'Southern Sotho' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'zu', name: 'Zulu' },
];

const VideoUploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetLanguage, setTargetLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!file || !targetLanguage) {
      setError('Please select a file and target language.');
      return;
    }
    setLoading(true);
    setProgress(0);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('target_language', targetLanguage);
      const token = localStorage.getItem('token');
      // Use XMLHttpRequest for progress
      await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1'}/videos/upload/`);
        if (token) xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            setProgress(Math.round((event.loaded / event.total) * 100));
          }
        };
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            setSuccess('Video uploaded and processing started!');
            setFile(null);
            setTargetLanguage('');
            setProgress(0);
            resolve(xhr.response);
          } else {
            try {
              const errorData = JSON.parse(xhr.responseText);
              reject(new Error(errorData.detail || 'Upload failed'));
            } catch {
              reject(new Error('Upload failed'));
            }
          }
        };
        xhr.onerror = () => reject(new Error('Upload failed'));
        xhr.send(formData);
      });
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">Upload <span className="gradient-text">Video</span></h1>
        <p className="page-description">Upload a video for translation and processing.</p>
      </div>
      <section className="section-padding">
        <div className="container mx-auto max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border border-t1-textSecondary/10 dark:border-white/10">
            {error && <div className="text-red-500 text-center">{error}</div>}
            {success && <div className="text-green-500 text-center">{success}</div>}
            <div>
              <label className="block mb-2 font-medium">Video File</label>
              <Input type="file" accept="video/*" onChange={e => setFile(e.target.files?.[0] || null)} disabled={loading} />
            </div>
            <div>
              <label className="block mb-2 font-medium">Target Language</label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                value={targetLanguage}
                onChange={e => setTargetLanguage(e.target.value)}
                disabled={loading}
                required
              >
                <option value="">Select a language</option>
                {ELEVENLABS_LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>
            {loading && (
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>{loading ? `Uploading... (${progress}%)` : 'Upload Video'}</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default VideoUploadPage; 