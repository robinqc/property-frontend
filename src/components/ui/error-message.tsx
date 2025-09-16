import { Unlink } from "lucide-react";
import React from "react";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="flex flex-col items-center text-red-500 py-10">
    <Unlink size={40} className="mb-4" />
    <div>
      {message || "Sorry, something went wrong. Please try again later."}
    </div>
  </div>
);
