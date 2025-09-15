"use client"
import { ArrowLeft, Heart, Share } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function PropertyHeader() {
    const [saved, setSaved] = useState(false);
    return (
        <div className="top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/properties">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to listings
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Share className="h-4 w-4" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => setSaved(!saved)}>
                <Heart className={`h-4 w-4 ${saved ? 'text-red-500' : ''}`} />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}