export const onDocumentLoad = (): Promise => {
  if (document.readyState !== 'loading') {
    return Promise.resolve();
  }
  return new Promise((resolve: (e: Event) => void) =>
    document.addEventListener('DOMContentLoaded', resolve)
  );
};
