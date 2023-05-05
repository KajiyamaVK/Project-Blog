export function readFile(file: File): Promise<{ name: string; src: string }> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      resolve({ name: file.name, src: reader.result as string });
    });
    reader.readAsDataURL(file);
  });
}
