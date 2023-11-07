// Create a new component inside resources/js/Pages folder
// that will be named Index.jsx
import { Link } from '@inertiajs/inertia-react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function PostIndex({ posts }) {

    return (
        <>
            <h1>My Blog</h1>
            <hr/>
            { posts && posts.data.map( (item) => (
                <div className="card mb-3" key={item.id}>
                    <div className="card-body">
                        <h5 className="h5 card-title" >{item.title}</h5>
                        <p className="fs-6 fw-normal card-text">{item.body}</p>
                    </div>
                </div>
            )) }
            <div>

                <nav aria-label="Page navigation">

                    <ul className="pagination">

                        {posts.links.map(link => (

                            <li key={link.label} className={
                                `page-item ${link.active ? 'active' : ''}`
                            }>
                                {link.label === '&laquo; Previous' ? (
                                        <Link className="page-link" key={link.label} href={link.url}>
                                        <span aria-hidden="true">&laquo; </span>
                                            <span className="sr-only">Previous</span>
                                        </Link>
                                    ) : link.label === 'Next &raquo;' ? (
                                        <Link className="page-link" key={link.label} href={link.url}>
                                            <span className="sr-only">Next</span>
                                            <span aria-hidden="true"> &raquo;</span>
                                        </Link>
                                    ) : (
                                        <Link className="page-link"  key={link.label} href={link.url}>
                                            {link.label}
                                        </Link>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </>
    )
}

