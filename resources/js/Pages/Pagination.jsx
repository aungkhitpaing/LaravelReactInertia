import { Link } from '@inertiajs/inertia-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Pagination({ records }) {

    return (
        <>
            <div>
                <nav aria-label="Page navigation">

                    <ul className="pagination">

                        {records.links.map(link => (

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
