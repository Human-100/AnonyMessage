
function encrypt(){
    var enc_input = document.getElementById("enc_input").value
    var result=""
    for(let i=0;i<enc_input.length;i++){
    var enc_code = enc_input.charCodeAt(i)
     result +=(enc_code+79.07)+" "
    }
    document.getElementById("enc_txt").innerText=result


}

function decrypt(){
    var dec_input = document.getElementById("dec_input").value
    var primary_array = dec_input.split(" ")
    var message_array=[]
    for (let i=0;i<primary_array.length;i++){
        var temp = (primary_array[i]-79.07)
        temp = String.fromCharCode(temp)
        message_array.push(temp)

    }
    message_array.pop()
    // console.log(message_array.join(""))
    // var message = ""
    // for(let i=0;i<message_array.length;i++){
    //     message += " "+message_array[i]
    // }
   var message = message_array.join("")
    document.getElementById("dec_txt").innerText=message
}


