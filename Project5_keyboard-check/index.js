const insert = document.getElementById('insert');
const inputText = document.getElementById('inputText');

inputText.addEventListener('keydown', (e) => {
    inputText.innerHTML = `
    <div class='color'>
        <table>
  <tr>
    <th>key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
    </div>
    `;
})