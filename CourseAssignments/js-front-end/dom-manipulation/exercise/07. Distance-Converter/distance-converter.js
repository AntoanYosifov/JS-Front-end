document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const values = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', handleConvert);

    function handleConvert() {
        const inputDistance = Number(document.getElementById('inputDistance').value);

        const inputUnitsSelectEl = document.getElementById('inputUnits');
        const selectedUnitFrom = inputUnitsSelectEl.children[inputUnitsSelectEl.selectedIndex].value;
        const multiplier = values[selectedUnitFrom];

        const distanceInMeters = inputDistance * multiplier;

        const outputUnitsSelectEl = document.getElementById('outputUnits');
        const outputUnitTo = outputUnitsSelectEl.children[outputUnitsSelectEl.selectedIndex].value;

        document.getElementById('outputDistance').value = convert(distanceInMeters, outputUnitTo);

    }

    function convert(distanceInMeters , convertToUnits) {
        return distanceInMeters / values[convertToUnits];
    }
}