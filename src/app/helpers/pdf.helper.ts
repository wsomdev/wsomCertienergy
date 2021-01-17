import { MatSnackBar } from "@angular/material/snack-bar";
import { TEXT_SNACKBAR_PDF } from "./static/text";

export class PdfHelper {
    public static openPdfNewTab(link: string, snackBar?: MatSnackBar): void {
        if (snackBar) {
            snackBar.open(TEXT_SNACKBAR_PDF, null, { horizontalPosition: 'center', verticalPosition: 'top' });
        }

        fetch(link)
            .then(res => {
                return res.blob();
            })
            .then(blob => {
                if (snackBar) {
                    snackBar.dismiss();
                }
                window.open(window.URL.createObjectURL(blob));
            });
    }
}
