
import React from 'react'
import images from '../../images/eat5.jpg'
import './style.css'

const Paginate = () => {
    return (
        <div>
            <nav className="centre-pag" aria-label="Page navigation ">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link sty-pervis" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li class="page-item sty-pag"><a class="page-link sty-pag" href="#">1</a></li>
                            <li class="page-item sty-pag"><a class="page-link sty-pag" href="#">2</a></li>
                            <li class="page-item sty-pag"><a class="page-link sty-pag" href="#">3</a></li>
                            <li class="page-item sty-pag"><a class="page-link sty-pag" href="#">4</a></li>
                            <li class="page-item">
                            <a class="page-link sty-next" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
        </div>
    )
}

export default Paginate
