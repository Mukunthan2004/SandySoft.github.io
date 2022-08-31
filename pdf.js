window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("resume");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.3,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}