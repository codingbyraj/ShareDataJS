function shareData() {
    myData = document.getElementById('data').value;
    sessionStorage.setItem('data', myData);
    location.href = 'page2.html';
}

function pageLoaded() {
    let myData = sessionStorage.getItem('data');
    document.getElementById('showData').innerText = myData;
}