data class Product(val id: Int, val name: String, val price: Double, val category: String, var stock: Int?)

fun stockLabel(stock: Int?): String = when {
    stock == null -> "Sin dato"
    stock == 0 -> "Agotado"
    stock < 5 -> "Pocas unidades"
    else -> "Disponible"
}

fun applyDiscount(price: Double, percent: Int): Double {
    require(price >= 0) { "El precio no puede ser negativo" }
    require(percent in 0..100) { "El descuento debe estar entre 0 y 100" }
    return price * (1 - percent / 100.0)
}

fun main() {
    val products = listOf(
        Product(1, "Agua mineral", 2500.0, "Bebidas", 12),
        Product(2, "Galletas integrales", 5200.0, "Snacks", 0),
        Product(3, "Jabón líquido", 8900.0, "Aseo", null)
    )
    products.forEach { product ->
        val discounted = applyDiscount(product.price, 10)
        println("${product.name} | Stock: ${stockLabel(product.stock)} | Precio con 10%: ${"%.2f".format(discounted)}")
    }
}
