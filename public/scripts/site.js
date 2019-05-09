// Init Granim
function onloadFunction() {
    var granimInstance = new Granim({
        element: '#granim-canvas',
        name: 'granim',
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#9b8c30', '#D04ED6'],
                    ['#1CD8D2', '#93EDC7'],
                    ['#9b9030', '#62d638'],
                    ['#00d8d7', '#ed30b2']

                    ]
            }
        }
    });
}