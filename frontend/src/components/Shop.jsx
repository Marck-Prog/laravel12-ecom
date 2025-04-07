import Layout from './common/Layout'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Dropdown,
  Pagination,
} from 'react-bootstrap'
import ProductImg from '../assets/images/products/rolex.jpg'

// Sample product data (replace with your actual data or API fetch)
const products = [
  {
    id: 1,
    image: ProductImg,
    name: 'The gangsta money trendy t-shirt unisex fashion',
    price: 99,
    sales: '10K+ sold',
    discount: '-80%',
    tags: ['FREE SHIPPING', 'CASHBACK'],
  },
  {
    id: 2,
    image: ProductImg,
    name: 'Korean Plain Crewneck Pullover Sweat Crew Neck',
    price: 99,
    sales: '10K+ sold',
    discount: '-80%',
    tags: ['FREE SHIPPING', 'CASHBACK'],
  },
  {
    id: 3,
    image: ProductImg,
    name: 'Fashion Brooklyn New York T-shirt For Men Khaki',
    price: 99,
    sales: '10K+ sold',
    discount: '-21%',
    tags: ['FREE SHIPPING'],
  },
  {
    id: 4,
    image: ProductImg,
    name: 'Plain Round Neck White And Black Cotton T-Shirt',
    price: 99,
    sales: '10K+ sold',
    discount: '-88%',
    tags: ['FREE SHIPPING', 'CASHBACK'],
  },
  {
    id: 5,
    image: ProductImg,
    name: 'Bulls T-Shirt For Unisex Crew Neck Black',
    price: 99,
    sales: '9.7K sold',
    discount: '-73%',
    tags: ['FREE SHIPPING', 'MEGA DISCOUNT', 'FLASH DEAL 10:00 8 Apr'],
  },
  {
    id: 6,
    image: ProductImg,
    name: '6pcs Boxer Brief For Men',
    price: 99,
    sales: '10K+ sold',
    discount: '-34%',
    tags: ['FREE SHIPPING', 'MEGA DISCOUNT'],
  },
  {
    id: 7,
    image: ProductImg,
    name: 'Trendy Corduroy Shorts for Men',
    price: 99,
    sales: '10K+ sold',
    discount: '-85%',
    tags: ['FREE SHIPPING'],
  },
  {
    id: 8,
    image: ProductImg,
    name: 'American Hoodie Pullover',
    price: 99,
    sales: '10K+ sold',
    discount: '-31%',
    tags: ['FREE SHIPPING', 'MEGA DISCOUNT'],
  },
  {
    id: 9,
    image: ProductImg,
    name: 'Myron Fashion Korean',
    price: 99,
    sales: '10K+ sold',
    discount: '-48%',
    tags: ['FREE SHIPPING'],
  },
  {
    id: 10,
    image: ProductImg,
    name: 'SS Sweatshirt',
    price: 99,
    sales: '10K+ sold',
    discount: '-65%',
    tags: ['FREE SHIPPING'],
  },
]

const Shop = () => {
  return (
    <Layout>
      <div className='container'>
        <nav aria-label='breadcrumb' className='py-4'>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <a href='#'>Home</a>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Shop
            </li>
          </ol>
        </nav>

        <Container fluid className='py-4'>
          <Row>
            {/* Sidebar */}
            <Col md={3} lg={2} className='border-end pe-3'>
              <h6 className='text-uppercase'>All Categories</h6>
              <ul className='list-unstyled'>
                <li>
                  <a
                    href='#'
                    className='text-decoration-none text-dark fw-bold'
                  >
                    Men's Apparel
                  </a>
                  <ul className='list-unstyled ps-3'>
                    <li>
                      <a href='#' className='text-decoration-none text-muted'>
                        Tops
                      </a>
                    </li>
                    <li>
                      <a href='#' className='text-decoration-none text-muted'>
                        Shorts
                      </a>
                    </li>
                    <li>
                      <a href='#' className='text-decoration-none text-muted'>
                        Pants
                      </a>
                    </li>
                    <li>
                      <a href='#' className='text-decoration-none text-muted'>
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a href='#' className='text-decoration-none text-muted'>
                        Underwear
                      </a>
                    </li>
                    <li>
                      <a href='#' className='text-decoration-none text-muted'>
                        More
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <h6 className='text-uppercase mt-4'>Search Filter</h6>
              <h6 className='text-muted'>By Category</h6>
              <Form>
                <Form.Check type='checkbox' label='T-Shirts (2M+)' />
                <Form.Check type='checkbox' label='Shirts (312K+)' />
                <Form.Check type='checkbox' label='Shorts (300K+)' />
                <Form.Check type='checkbox' label='Polo Shirts (282K+)' />
                <a href='#' className='text-decoration-none text-muted'>
                  More
                </a>
              </Form>
            </Col>

            {/* Main Content */}
            <Col md={9} lg={10}>
              {/* Sorting Bar */}
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='d-flex gap-3'>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant='outline-secondary'
                      id='dropdown-sort'
                    >
                      Sort By: Popular
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Popular</Dropdown.Item>
                      <Dropdown.Item href='#'>Latest</Dropdown.Item>
                      <Dropdown.Item href='#'>Top Sales</Dropdown.Item>
                      <Dropdown.Item href='#'>Price</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <button className='btn btn-outline-secondary'>Latest</button>
                  <button className='btn btn-outline-secondary'>
                    Top Sales
                  </button>
                  <button className='btn btn-outline-secondary'>Price</button>
                </div>
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{8}</Pagination.Item>
                  <Pagination.Next />
                  <span className='ms-2'>1/8</span>
                </Pagination>
              </div>

              {/* Product Grid */}
              <Row>
                {products.map((product) => (
                  <Col xs={6} md={4} lg={3} className='mb-4' key={product.id}>
                    <Card className='h-100'>
                      <div className='position-relative'>
                        <Card.Img variant='top' src={product.image} />
                        {product.discount && (
                          <span
                            className='position-absolute top-0 end-0 bg-danger text-white p-1'
                            style={{ fontSize: '0.8rem' }}
                          >
                            {product.discount}
                          </span>
                        )}
                      </div>
                      <Card.Body>
                        <Card.Title className='text-truncate'>
                          {product.name}
                        </Card.Title>
                        <div className='d-flex align-items-center mb-2'>
                          <span className='text-danger fw-bold me-2'>
                            ₱{product.price}
                          </span>
                          <span
                            className='text-muted'
                            style={{ fontSize: '0.8rem' }}
                          >
                            {product.sales}
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-1'>
                          {product.tags.map((tag, index) => (
                            <span
                              key={index}
                              className={`badge ${
                                tag.includes('FREE SHIPPING')
                                  ? 'bg-success'
                                  : tag.includes('CASHBACK')
                                  ? 'bg-primary'
                                  : tag.includes('MEGA DISCOUNT')
                                  ? 'bg-warning'
                                  : 'bg-info'
                              } text-white`}
                              style={{ fontSize: '0.7rem' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Shop
