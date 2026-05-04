import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  TextField, 
  InputAdornment, 
  IconButton,
  Chip,
  MenuItem,
  Select,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Stack
} from '@mui/material';
import { 
  Add, 
  Search, 
  FilterList, 
  MoreVert, 
  SortOutlined,
  CloudUpload,
  Close
} from '@mui/icons-material';

const initialProducts = [
  {
    id: 1,
    name: 'Nike Air Zoom Pegasus 39',
    category: 'Giày chạy bộ',
    sku: 'NK-P39-RED-42',
    price: '2450000',
    stock: 142,
    status: 'ĐANG BÁN',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Sony WH-1000XM5 Wireless',
    category: 'Phụ kiện số',
    sku: 'SNY-XM5-BLK',
    price: '8990000',
    stock: 5,
    status: 'SẮP HẾT',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Minimalist Quartz Watch',
    category: 'Thời trang',
    sku: 'WTCH-MIN-01',
    price: '1200000',
    stock: 45,
    status: 'ĐANG BÁN',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Aviator Gold Sunglasses',
    category: 'Thời trang',
    sku: 'SUN-AVT-G',
    price: '3500000',
    stock: 0,
    status: 'HẾT HÀNG',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    name: 'Urban Explorer Backpack',
    category: 'Hành lý',
    sku: 'BAG-URB-02',
    price: '1850000',
    stock: 28,
    status: 'ĐANG BÁN',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb94c6a62?auto=format&fit=crop&q=80&w=400'
  }
];

const ProductList = () => {
  const [productList, setProductList] = useState(() => {
    const savedProducts = localStorage.getItem('seller_products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortFilter, setSortFilter] = useState('newest');

  // Save to LocalStorage whenever productList changes
  useEffect(() => {
    try {
      localStorage.setItem('seller_products', JSON.stringify(productList));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
      if (error.name === 'QuotaExceededError') {
        alert("Ảnh quá nặng! Không thể lưu vào bộ nhớ trình duyệt. Vui lòng chọn ảnh nhẹ hơn.");
      }
    }
  }, [productList]);

  const handleResetData = () => {
    if (window.confirm("Bạn có chắc muốn xóa tất cả thay đổi và quay về dữ liệu gốc?")) {
      localStorage.removeItem('seller_products');
      window.location.reload();
    }
  };

  // Edit Modal State
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const fileInputRef = useRef(null);

  const handleEditClick = (product) => {
    setCurrentProduct({ ...product });
    setEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    setProductList(prev => prev.map(p => p.id === currentProduct.id ? currentProduct : p));
    setEditDialogOpen(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentProduct(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getStatusInfo = (stock) => {
    if (stock === 0) return { label: 'HẾT HÀNG', color: '#e74c3c' };
    if (stock <= 10) return { label: 'SẮP HẾT', color: '#f1c40f' };
    return { label: 'ĐANG BÁN', color: '#2ecc71' };
  };

  const filteredProducts = productList
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortFilter === 'price-asc') return a.price - b.price;
      if (sortFilter === 'price-desc') return b.price - a.price;
      if (sortFilter === 'stock-low') return a.stock - b.stock;
      return b.id - a.id; // newest
    });

  return (
    <Box sx={{ p: 4, bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#111', mb: 0.5 }}>
            Quản lý sản phẩm
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Theo dõi và điều chỉnh thông tin sản phẩm của bạn.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Add />}
          sx={{ 
            bgcolor: '#002060', borderRadius: '12px', px: 3, py: 1.5, textTransform: 'none', fontWeight: 700,
            boxShadow: '0 4px 14px rgba(0, 32, 96, 0.25)', '&:hover': { bgcolor: '#001a4d' }
          }}
        >
          Thêm sản phẩm mới
        </Button>
      </Box>

      {/* Filter Bar */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center', bgcolor: '#fff', p: 2, borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.02)' }}>
        <TextField 
          placeholder="Tìm kiếm tên sản phẩm hoặc SKU..."
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flexGrow: 1, '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: '#f9fafb', '& fieldset': { borderColor: 'transparent' } } }}
          InputProps={{ startAdornment: (<InputAdornment position="start"><Search sx={{ color: '#9ca3af' }} /></InputAdornment>) }}
        />

        <Stack direction="row" spacing={1.5}>
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              displayEmpty
              sx={{ borderRadius: '12px', bgcolor: '#f9fafb' }}
              IconComponent={FilterList}
            >
              <MenuItem value="all">Tất cả danh mục</MenuItem>
              <MenuItem value="Giày chạy bộ">Giày chạy bộ</MenuItem>
              <MenuItem value="Phụ kiện số">Phụ kiện số</MenuItem>
              <MenuItem value="Thời trang">Thời trang</MenuItem>
              <MenuItem value="Hành lý">Hành lý</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <Select
              value={sortFilter}
              onChange={(e) => setSortFilter(e.target.value)}
              displayEmpty
              sx={{ borderRadius: '12px', bgcolor: '#f9fafb' }}
              IconComponent={SortOutlined}
            >
              <MenuItem value="newest">Mới nhất</MenuItem>
              <MenuItem value="price-asc">Giá: Thấp - Cao</MenuItem>
              <MenuItem value="price-desc">Giá: Cao - Thấp</MenuItem>
              <MenuItem value="stock-low">Tồn kho thấp</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => {
          const status = getStatusInfo(product.stock);
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ 
                borderRadius: '20px', border: '1px solid #f0f0f0', boxShadow: 'none', overflow: 'hidden', transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.08)', '& .product-actions': { opacity: 1 } }
              }}>
                {/* Product Image */}
                <Box sx={{ position: 'relative', pt: '100%', overflow: 'hidden' }}>
                  <Box component="img" src={product.image} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <Chip 
                    label={status.label} 
                    size="small"
                    sx={{ 
                      position: 'absolute', top: 12, left: 12, bgcolor: 'rgba(255,255,255,0.95)', color: status.color, 
                      fontWeight: 800, fontSize: '0.65rem', borderRadius: '6px'
                    }} 
                  />
                  
                  {/* Hover Actions */}
                  <Box className="product-actions" sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, opacity: 0, transition: 'opacity 0.3s ease' }}>
                    <Button onClick={() => handleEditClick(product)} variant="contained" size="small" sx={{ bgcolor: '#fff', color: '#002060', fontWeight: 700, borderRadius: '8px', '&:hover': { bgcolor: '#f0f0f0' } }}>Sửa</Button>
                    <IconButton size="small" sx={{ bgcolor: '#fff', color: '#666' }}><MoreVert fontSize="small" /></IconButton>
                  </Box>
                </Box>

                {/* Product Info */}
                <Box sx={{ p: 2 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#3f51b5' }}>{product.category.toUpperCase()}</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, mt: 0.5, mb: 0.5, lineHeight: 1.3, height: '2.6em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mb: 2 }}>SKU: {product.sku}</Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', pt: 1.5, borderTop: '1px dashed #eee' }}>
                    <Box>
                      <Typography variant="caption" color="textSecondary" sx={{ fontWeight: 600, display: 'block' }}>Giá bán lẻ</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>{Number(product.price).toLocaleString('vi-VN')}₫</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" color="textSecondary" sx={{ fontWeight: 600, display: 'block' }}>Tồn kho</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: product.stock === 0 ? '#e74c3c' : '#111' }}>{product.stock} cái</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="xs" fullWidth sx={{ '& .MuiDialog-paper': { borderRadius: '20px' } }}>
        <DialogTitle sx={{ fontWeight: 800, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Chỉnh sửa sản phẩm
          <IconButton onClick={() => setEditDialogOpen(false)} size="small"><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {currentProduct && (
            <Stack spacing={3} sx={{ mt: 1 }}>
              {/* Image Upload Preview */}
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ position: 'relative', width: 120, height: 120, mx: 'auto', mb: 1 }}>
                  <Avatar src={currentProduct.image} variant="rounded" sx={{ width: 120, height: 120, borderRadius: '15px', border: '2px solid #f0f0f0' }} />
                  <IconButton 
                    onClick={() => fileInputRef.current.click()}
                    sx={{ position: 'absolute', bottom: -10, right: -10, bgcolor: '#002060', color: '#fff', '&:hover': { bgcolor: '#001a4d' } }} 
                    size="small"
                  >
                    <CloudUpload fontSize="small" />
                  </IconButton>
                  <input type="file" hidden ref={fileInputRef} onChange={handleImageUpload} accept="image/*" />
                </Box>
                <Typography variant="caption" color="textSecondary">Bấm icon để đổi hình ảnh</Typography>
              </Box>

              <TextField 
                label="Tên sản phẩm" fullWidth size="small" value={currentProduct.name} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              />
              
              <FormControl fullWidth size="small">
                <Typography variant="caption" sx={{ mb: 0.5, fontWeight: 600 }}>Danh mục</Typography>
                <Select value={currentProduct.category} onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}>
                  <MenuItem value="Giày chạy bộ">Giày chạy bộ</MenuItem>
                  <MenuItem value="Phụ kiện số">Phụ kiện số</MenuItem>
                  <MenuItem value="Thời trang">Thời trang</MenuItem>
                  <MenuItem value="Hành lý">Hành lý</MenuItem>
                </Select>
              </FormControl>

              <TextField 
                label="Giá bán (₫)" fullWidth size="small" type="number" value={currentProduct.price} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
              />

              <TextField 
                label="Số lượng tồn kho" fullWidth size="small" type="number" value={currentProduct.stock} 
                onChange={(e) => setCurrentProduct({ ...currentProduct, stock: parseInt(e.target.value) || 0 })}
              />
            </Stack>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setEditDialogOpen(false)} sx={{ color: '#666', textTransform: 'none', fontWeight: 600 }}>Hủy</Button>
          <Button onClick={handleSaveEdit} variant="contained" sx={{ bgcolor: '#002060', borderRadius: '10px', textTransform: 'none', px: 3 }}>Lưu thay đổi</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductList;
