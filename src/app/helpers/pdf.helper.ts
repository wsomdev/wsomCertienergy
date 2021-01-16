export class PdfHelper {
    public static openPdfNewTab(link: string): void {
        fetch(link)
            .then(res => {
                return res.blob();
            })
            .then(blob => {
                window.open(window.URL.createObjectURL(blob));
            });
    }
}
