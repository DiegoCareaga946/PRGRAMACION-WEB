
function identificarId(boton){
    const styles = document.getElementById("style");
    let botonId = boton.id;
    let colorStyle;
    
    switch(botonId){
        case "red":
            if(!styles.classList.contains("red-style")){
                styles.classList.remove("green-style", "blue-style", "restore");
                styles.classList.toggle("red-style");
            }
            break;
        case "green":
            if(!styles.classList.contains("green-style")){
                styles.classList.remove("red-style", "blue-style", "restore");
                styles.classList.toggle("green-style");
            }
            break;
        case "blue":
            if(!styles.classList.contains("blue-style")){
                styles.classList.remove("red-style", "green-style", "restore");
                styles.classList.toggle("blue-style");
            }
            break;
        case "restore":
            if(!styles.classList.contains("restore")){
                styles.classList.remove("red-style", "green-style", "blue-style");
                styles.classList.toggle("restore");
            }
        break;
    }
    console.log(botonId);
    
}