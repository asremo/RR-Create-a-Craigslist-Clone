import Posting from './Posting'

const Gallery = (props) => {
    return (
        <div className="gallery">
            {props.postings.map((p, i) => {
                return <Posting posting={p} key={i} />
            })}
        </div>
    )
}
// 
// OR

// function Gallery(props) {
//     return(
//         <div className='gallery'>
//             <h2>Gallery</h2>
//             {props.postings.map((p, i) => {
//                 return <Posting posting={p} key={i} />
//             })}
//         </div>
//     )
// }

export default Gallery