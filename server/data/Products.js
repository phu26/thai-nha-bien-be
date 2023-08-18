

const products = [
    {
        _id:"1",
        title: "Gương Tròn Treo Tường Viền gỗ",
        price: '189000',
        image01: '../images/products/product-01 (1).jpg',
        image02: '../images/products/product-01 (2).jpg',
        categoryId: "1",
        colors: ["white", "red", "orange"],
        slug: "guong-treo-tuong-01",
        size: ["30", "35", "40", "45","50","55","60"],
        description: "<br/>✔️ BẢO HÀNH 1 NĂM, CAM KẾT 1 ĐỔI 1 VỚI SẢN PHẨM KHÔNG GIỐNG MÔ TẢ, KÉM CHẤT LƯỢNG.<br/>✔️ BAO BỂ VỠ.<br/><br/>Gương là trợ thủ đắc lực trong việc trang điểm giúp bạn thêm tự tin, yêu đời hơn và có một ngày làm việc hiệu quả với tâm trạng thật vui vẻ. Ngoài ra, còn giúp trang trí, tôn thêm vẻ đẹp cho không gian của ngôi nhà.<br/><br/>Gương tròn treo tường khung viền gỗ thông. Khung viền xung quanh gương được bọc bởi gỗ thông. Khung gỗ được tẩm sấy, chống mối mọt chống cong vênh, từng cạnh mép của khung được mài gọt tỉ mỉ, khéo léo. Thiết kế hiện đại, nhẹ nhàng, tinh tế. Gương tròn treo tường khung viền gỗ là sự lựa chọn hàng đầu cho những không gian nội thất hiện đại, scandinavian, Hàn Quốc....<br/><br/>▪️ Thông số sản phẩm	<br/>✔ Viền GỖ cực kì chắc chắn và bền bỉ, các đường vân gỗ rõ nét, tươi hơn, đẹp hơn so với gỗ thông.<br/>✔  Kích thước: 35cm  - 40cm - 45cm - 50cm - 55cm - 60cm.		<br/>✔  Chất liệu: Viền gỗ chắc chắn, phôi gương Việt Nhật đem đến một hình ảnh chân thật và rõ nét nhất.<br/><br/>🔸 Sản phẩm chống mốc, đã được xử lí chống mối mọt, cong vênh, thời gian sử dụng lâu dài,giúp nâng cao tuổi thọ , dễ dàng vệ sinh, hạn chế bám bẩn đảm bảo chất lượng xuất xưởng<br/>🔸 Giúp bạn soi gương mặt hằng ngày, hình ảnh chân thật tỉ lệ 1:1 nhờ mặt gương cao cấp<br/>🔸 Trợ thủ đắc lực cho các bạn Make-up trang điểm, dùng mỹ phẩm,...	<br/>🔸 Dùng trang trí mang tính thẩm mỹ cao nhờ khung màu gỗ tự nhiên sáng và nổi bật	<br/><br/>——————————————— <br/>NHƯ Ý DECOR<br/>Chuyên cung cấp các sản phẩm gỗ decor trang trí căn phòng của bạn( bàn , đinh hoặc móc treo , kệ, gương ,...) . <br/>Sản phẩm đa dạng, chất lượng, nguồn gốc rõ ràng, ship hàng bao giá toàn quốc, giá rẻ tận xưởng.<br/>CAM KẾT :<br/>✔️ Cam kết sản phẩm y hình <br/>✔️ Tư vấn nhiệt tình, chu đáo	<br/>✔️ Giá tốt nhất trên thị trường<br/>✔️ Nhận hàng và thanh toán	<br/>1. Trường hợp được đổi trả:<br/>- Hàng không đúng chủng loại, mẫu mã như quý khách đặt hàng.<br/>- Không đủ số lượng, không đủ bộ như trong đơn hàng.<br/>"
    },
   
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}
const getProductById = (id) => products.find(e => e._id === id)
const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo,
    getProductById
}

export default productData