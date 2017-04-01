var vocab;

$.get('vocab.txt', function (data) {
    vocab = data.split('\n');
});

$('.mime').click(function () {
    console.log('clicked');
    var randomWord = vocab[Math.floor(Math.random() * vocab.length)];
    $('.mime').html('<h1>' + randomWord + '</h1>');
});
