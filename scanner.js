document.getElementById('startButton').addEventListener('click', () => {
    startScanner();
});

async function startScanner() {
    const codeReader = new ZXing.BrowserMultiFormatReader();
    const videoInputDevices = await codeReader.listVideoInputDevices();
    const selectedDeviceId = videoInputDevices[0].deviceId;

    const videoElement = document.getElementById('video');
    const resultElement = document.getElementById('result');

    codeReader.decodeFromVideoDevice(selectedDeviceId, videoElement, (result, error) => {
        if (result) {
            resultElement.textContent = result.text;
            console.log(result);
        }
        if (error && !(error instanceof ZXing.NotFoundException)) {
            console.error(error);
        }
    });
}