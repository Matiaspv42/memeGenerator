import memesData from '../memesData'

console.log(memesData);

export default function Meme (){
    function getRandomMeme(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const {url} = memesArray[randomNumber]
        console.log(url);
    }
    getRandomMeme()
    return(
        <main >
            <div className="memeForm">
                <input type="text" id="firstPart" name="firstPart" defaultValue={'Shut up'} className="formText"/>
                <input type="text" id="secondPart" name="secondPart" defaultValue={'and take my money'} className="formText"/>
                <button className="formButton" onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}