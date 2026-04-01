// Documentation: Handles the UI interactions for Discovery
const observations = [];

function addObservation() {
    const process = document.getElementById('manual-process').value;
    const loss = document.getElementById('pain-point').value;

    if (process && loss) {
        observations.push({ process, loss });
        renderObservations();
        addToDataMap(process); // Automatically suggests a data column
        document.getElementById('manual-process').value = '';
        document.getElementById('pain-point').value = '';
    }
}

function renderObservations() {
    const list = document.getElementById('observation-list');
    list.innerHTML = observations.map(obs => 
        `<li><strong>Process:</strong> ${obs.process} | <strong>Loss:</strong> ${obs.loss}</li>`
    ).join('');
}

function addToDataMap(processName) {
    const tableBody = document.getElementById('mapping-body');
    const row = tableBody.insertRow();
    
    // Clean the string to look like a database column (e.g., "User_ID")
    const columnSuggest = processName
        .replace(/\s+/g, '_')
        .replace(/[^\w]/g, '')
        .toUpperCase()
        .substring(0, 20);
    
    row.innerHTML = `
        <td><code style="color: var(--accent); font-weight: bold;">${columnSuggest}</code></td>
        <td>
            <select>
                <option>VARCHAR (Text)</option>
                <option>INT (Number)</option>
                <option>BOOLEAN (Yes/No)</option>
                <option>TIMESTAMP</option>
                <option>BLOB (Image/File)</option>
            </select>
        </td>
        <td><input type="text" placeholder="Explain the business value of this column..."></td>
    `;
}

        <td>
            <select>
                <option>String</option>
                <option>Image/Blob</option>
                <option>Date</option>
                <option>Boolean</option>
            </select>
        </td>
        <td><input type="text" placeholder="Fixing data loss from: ${processName}"></td>
    `;
}

function generateBlueprint() {
    alert("Blueprint Data Map generated! Check the console (F12) for the JSON structure.");
    console.log("FINAL DATA MAP:", observations);
}