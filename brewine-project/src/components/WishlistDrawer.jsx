import { X, Heart, ShoppingCart, Trash2 } from "lucide-react";

function WishlistDrawer({
  isOpen,
  onClose,
  wishlist = [],
  onRemoveFromWishlist,
  onMoveToCart,
}) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[420px] bg-white h-full shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <Heart size={20} className="fill-[#e62e2d] text-[#e62e2d]" />
            <h2 className="text-lg font-bold text-gray-900">
              My Wishlist ({wishlist.length})
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 transition cursor-pointer shrink-0"
            aria-label="Close Wishlist"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                <Heart size={28} className="text-[#e62e2d]" />
              </div>
              <h3 className="text-base font-bold text-gray-800">
                Your wishlist is empty
              </h3>
              <p className="text-xs text-gray-500 mt-1 max-w-xs">
                Click the heart icon on any product to save it here for later.
              </p>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={`${item.id}-${item.colorLabel}`}
                className="flex gap-3 p-3 rounded-2xl border border-gray-200/80 bg-gray-50/50"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded-xl bg-white p-1.5 border border-gray-100 shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.colorLabel}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onRemoveFromWishlist(item.id, item.colorLabel)
                      }
                      className="text-gray-400 hover:text-red-600 p-1 transition cursor-pointer shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-3">
                    <span className="text-sm font-extrabold text-gray-950">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>

                    <button
                      type="button"
                      onClick={() => onMoveToCart(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#e62e2d] hover:bg-[#cc2221] text-white transition cursor-pointer shrink-0"
                    >
                      <ShoppingCart size={14} />
                      Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistDrawer;