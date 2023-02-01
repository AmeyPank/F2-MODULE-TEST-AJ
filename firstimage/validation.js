
function login(){
    if( form.name.value &&form.username.value){
        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        
        document.write('<html><body><h1> <center>')
        document.write("Welcome"+" " );
        document.write( name+" ");
        document.write( " "+username);
        document.write('</center></h1></body></html>')
    }else{
        alert("Please enter your username")
    }
    localStorage.setItem('username', username);
    localStorage.setItem('name', name);


    localStorage.getItem('username', username);
    localStorage.getItem('name', name);
}



