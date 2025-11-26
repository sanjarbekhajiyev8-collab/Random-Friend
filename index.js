let friends = [];

document.getElementById('add-friend').addEventListener('click', function (e) {
    e.preventDefault();
    
    let friend = document.getElementById('friend-input').value;
    if (friend.trim() === "") return; // bo'sh kiritishni oldini oladi
    
    friends.push(friend);

    document.getElementById('friends-list').innerText = friends.join(", ");
    
    document.getElementById('friend-input').value = ""; // inputni tozalash
});

document.getElementById('select-friend').addEventListener('click', function () {
    if (friends.length === 0) {
        document.getElementById('random-friend').innerText = "Do'stlar ro'yxati bo'sh!";
        return;
    }

    let randomNumber = Math.floor(Math.random() * friends.length);
    document.getElementById('random-friend').innerText = friends[randomNumber];
});
