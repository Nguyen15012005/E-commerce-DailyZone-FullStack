import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  Avatar, 
  Button, 
  Grid, 
  TextField, 
  Divider,
  Stack,
  IconButton
} from '@mui/material';
import { 
  Edit, 
  PhotoCamera, 
  Storefront, 
  Email, 
  Phone, 
  LocationOn,
  VerifiedUser
} from '@mui/icons-material';

const SellerProfile = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e293b', mb: 1 }}>
          Hồ sơ người bán
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Quản lý thông tin cửa hàng và thiết lập tài khoản của bạn.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left: General Info */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <Box sx={{ position: 'relative', width: 'fit-content', mx: 'auto', mb: 3 }}>
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" 
                sx={{ width: 120, height: 120, border: '4px solid #fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
              />
              <IconButton 
                sx={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  right: 0, 
                  bgcolor: '#C9A96E', 
                  color: '#fff',
                  '&:hover': { bgcolor: '#b38f4d' }
                }}
                size="small"
              >
                <PhotoCamera sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>DailyZone Store</Typography>
            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
              <Chip label="Đối tác ưu tú" size="small" sx={{ bgcolor: '#fef3c7', color: '#92400e', fontWeight: 700 }} />
              <Chip icon={<VerifiedUser sx={{ fontSize: '14px !important' }} />} label="Đã xác thực" size="small" sx={{ bgcolor: '#ecfdf5', color: '#059669', fontWeight: 700 }} />
            </Stack>
            
            <Divider sx={{ my: 3 }} />
            
            <Stack spacing={2} sx={{ textAlign: 'left' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Storefront sx={{ color: '#64748b' }} />
                <Box>
                  <Typography variant="caption" color="textSecondary">Tên cửa hàng</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>DailyZone Official</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Email sx={{ color: '#64748b' }} />
                <Box>
                  <Typography variant="caption" color="textSecondary">Email liên hệ</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>contact@dailyzone.com</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Phone sx={{ color: '#64748b' }} />
                <Box>
                  <Typography variant="caption" color="textSecondary">Số điện thoại</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>+84 988 777 666</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOn sx={{ color: '#64748b' }} />
                <Box>
                  <Typography variant="caption" color="textSecondary">Địa chỉ kho hàng</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>Quận 1, TP. Hồ Chí Minh</Typography>
                </Box>
              </Box>
            </Stack>
            
            <Button 
              fullWidth 
              variant="outlined" 
              startIcon={<Edit />}
              sx={{ mt: 4, borderRadius: '12px', textTransform: 'none', fontWeight: 700, borderColor: '#C9A96E', color: '#C9A96E' }}
            >
              Chỉnh sửa hồ sơ
            </Button>
          </Card>
        </Grid>

        {/* Right: Detailed Settings */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 4, borderRadius: '20px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Thông tin cơ bản</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Tên cửa hàng" defaultValue="DailyZone Official" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Mã số thuế" defaultValue="0312345678" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Mô tả cửa hàng" multiline rows={4} defaultValue="DailyZone - Thương hiệu thời trang và phụ kiện phong cách sống hàng đầu Việt Nam. Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất cho khách hàng." />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email nhận thông báo" defaultValue="admin@dailyzone.com" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Số hotline" defaultValue="1900 1234" />
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" sx={{ bgcolor: '#002060', px: 4, borderRadius: '10px', textTransform: 'none', fontWeight: 700 }}>
                Lưu thay đổi
              </Button>
            </Box>
          </Card>
          
          <Card sx={{ p: 4, mt: 4, borderRadius: '20px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', border: '1px solid #fee2e2' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: '#991b1b' }}>Vùng nguy hiểm</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>Các thao tác này không thể hoàn tác. Vui lòng cẩn trọng.</Typography>
            <Button variant="outlined" color="error" sx={{ borderRadius: '10px', textTransform: 'none', fontWeight: 700 }}>
              Tạm ngừng kinh doanh
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const Chip = ({ label, size, sx, icon }) => (
  <Box sx={{ 
    display: 'inline-flex', 
    alignItems: 'center', 
    gap: 0.5, 
    px: 1.5, 
    py: 0.5, 
    borderRadius: '6px', 
    fontSize: '0.75rem',
    ...sx 
  }}>
    {icon}
    {label}
  </Box>
);

export default SellerProfile;
