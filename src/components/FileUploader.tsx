import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  acceptedFileTypes?: string[];
  maxFileSize?: number; // in MB
  className?: string;
}

export default function FileUploader({
  onFileUpload,
  acceptedFileTypes = [".pdf", ".docx"],
  maxFileSize = 10,
  className = "",
}: FileUploaderProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setUploadedFile(file);
        setIsUploading(true);

        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(progress);

          if (progress >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            onFileUpload(file);
          }
        }, 200);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxSize: maxFileSize * 1024 * 1024, // Convert MB to bytes
  });

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  return (
    <div className={`w-full ${className}`}>
      {!uploadedFile ? (
        <Card className="border-2 border-dashed">
          <CardContent className="p-6">
            <div
              {...getRootProps()}
              className={`flex flex-col items-center justify-center rounded-md border-2 border-dashed p-6 text-center cursor-pointer transition-colors hover:bg-muted/50 ${
                isDragActive ? "border-primary bg-primary/5" : ""
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="mb-4 h-10 w-10 text-muted-foreground" />
              {isDragActive ? (
                <p className="text-lg font-medium">Drop the file here...</p>
              ) : (
                <>
                  <p className="text-lg font-medium">
                    Drag & drop your resume here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {acceptedFileTypes.join(", ")} files up to {maxFileSize}MB
                  </p>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-medium">{uploadedFile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={removeFile}
                disabled={isUploading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {isUploading && (
              <div className="mt-4">
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
