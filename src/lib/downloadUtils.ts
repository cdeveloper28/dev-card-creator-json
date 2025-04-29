
import html2canvas from "html2canvas";

export async function downloadCardAsImage(cardRef: React.RefObject<HTMLDivElement>) {
  if (!cardRef.current) return;
  
  try {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2, // Higher resolution
      backgroundColor: null,
      logging: false,
    });
    
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "BusinessCard.png";
    link.click();
    
    return true;
  } catch (error) {
    console.error("Error downloading card:", error);
    return false;
  }
}

export function copyCardAsImage(cardRef: React.RefObject<HTMLDivElement>) {
  if (!cardRef.current) return false;
  
  return html2canvas(cardRef.current, {
    scale: 2,
    backgroundColor: null,
    logging: false,
  }).then((canvas) => {
    canvas.toBlob((blob) => {
      if (!blob) return false;
      
      try {
        // Modern API
        navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
        return true;
      } catch (err) {
        console.error("Copy to clipboard failed:", err);
        return false;
      }
    });
    
    return true;
  });
}
