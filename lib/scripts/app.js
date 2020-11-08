let myInput = document.getElementById('fileInput')
let show = document.getElementById('showSelected')
function readAndPreview(file){
    if(/\.(jpe?g|png|gif)$/i.test(file.name)){
        let reader = new  FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load',()=>{
            viewImage(reader.result)
        })
    }else{
        document.getElementById('error').innerHTML = "we just accept images"
        document.getElementById('error').classList.remove('hidden')
    }
}
function viewImage(src){
    let container = document.createElement('div')
    let img = document.createElement('img')
    img.classList = 'm-1 w-32 h-32 rounded-sm'
    img.src = src
    container.classList = "relative view"
    container.appendChild(img)
    show.appendChild(container)
}
myInput.addEventListener('change',()=>{
    for(let file of myInput.files){
        console.log(file.name)
        readAndPreview(file)
    }
})