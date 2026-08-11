function downloadIndex(content){

const blob = new Blob([content], {type:'text/html'});

const a = document.createElement('a');

a.href = URL.createObjectURL(blob);

a.download = 'index.html';

a.click();
}
