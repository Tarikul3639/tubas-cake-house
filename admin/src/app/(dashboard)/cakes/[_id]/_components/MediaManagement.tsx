import React, { useState } from "react";
import { Image as ImageIcon, Trash2, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ICake } from "@/types/cakes";

interface IMediaManagement {
  cake: ICake;
  onUpdate: (key: keyof ICake, value: any) => void;
}

export default function MediaManagement({ cake, onUpdate }: IMediaManagement) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const removeGalleryImage = (index: number) => {
    const updatedImages = cake.images.filter((_, i) => i !== index);
    // If the removed image is the selected one, reset selection
    if (selectedImage === cake.images[index]) {
      setSelectedImage(updatedImages[0] || null);
    }
    onUpdate("images", updatedImages);
  };
  return (
    <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-blue-50 rounded-xl text-blue-500">
          <ImageIcon size={20} />
        </div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
          Product Assets
        </h3>
      </div>
      <div className="space-y-6">
        <div className="relative group aspect-video rounded-[32px] overflow-hidden bg-slate-100 border border-slate-200">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage
              src={selectedImage || cake.images[0]}
              alt="Primary Cake Image"
              className="object-cover w-full h-full rounded-none"
            />
            <AvatarFallback className="bg-slate-200 text-slate-400 flex items-center justify-center rounded-none">
              <ImageIcon size={40} />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {cake.images.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative group"
              onClick={() => setSelectedImage(img)}
            >
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage
                  src={img}
                  alt={`Cake Image ${i + 1}`}
                  className="object-cover w-full h-full rounded-none"
                />
                <AvatarFallback className="bg-slate-200 text-slate-400 flex items-center justify-center rounded-none">
                  <ImageIcon size={40} />
                </AvatarFallback>
              </Avatar>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  removeGalleryImage(i);
                }}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
          <label
            className="aspect-square rounded-2xl border-2 border-dashed border-slate-200
  flex items-center justify-center text-slate-400 cursor-pointer
  hover:text-pink-500 hover:border-pink-200 transition-all"
          >
            <Plus size={20} />

            <Input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (!files) return;

                const newImages = Array.from(files).map((file) =>
                  URL.createObjectURL(file)
                );

                onUpdate("images", [...cake.images, ...newImages]);
              }}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
