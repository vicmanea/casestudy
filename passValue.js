function testJS()
{

    var b = document.getElementById('name').value,
        url = 'welcome.html' + encodeURIComponent(b);

    document.location.href = url;

}