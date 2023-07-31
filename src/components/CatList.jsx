import Title from './Title'

function CatList() {
    
    console.log("CatList has been called!")

    return (
        <ul>
            <Title />
            <li>Ursula</li>
            <li>Octavia</li>
        </ul>
    )
}

export default CatList