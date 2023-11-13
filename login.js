function validate()
{
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if(username=='farha' && password== 'ahmed')
    {
        window.location="https://www.canva.com/design/DAF0EVdWz6o/Dqm_skWUMWEkc25vy78e5g/edit?utm_content=DAF0EVdWz6o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        alert("Login successful");
    }
    else{
        alert("login failed");
        return;
    }
}