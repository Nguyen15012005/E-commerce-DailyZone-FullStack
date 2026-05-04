import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Pagination,
  Stack,
  Checkbox,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Add,
  Search,
  CalendarToday,
  FilterList,
  FileDownload,
  Print,
  MoreVert,
  TrendingUp,
  WarningAmber
} from '@mui/icons-material';

const stats = [
  { label: 'TỔNG ĐƠN HÀNG', value: '1,284', change: '+12%', isPositive: true },
  { label: 'ĐÃ XỬ LÝ', value: '1,154', change: '+8.4%', isPositive: true },
  { label: 'ĐANG CHỜ XỬ LÝ', value: '42', warning: 'Cần xử lý gấp', isWarning: true },
  { label: 'ĐÃ HỦY', value: '10', change: '-2.5%', isPositive: false },
  { label: 'TỶ LỆ HỦY ĐƠN', value: '0.8%', change: '+0.2%', isPositive: false },
];

const orders = [
  { id: '#ORD-9428', date: '24/05/2024', time: '14:30', customer: 'Nguyễn Văn Hoàng', email: 'hoang.nv@gmail.com', total: '₫1,250,000', payment: 'Đã thanh toán', status: 'Đang giao', statusColor: '#3498db' },
  { id: '#ORD-9427', date: '24/05/2024', time: '12:15', customer: 'Trần Thị Thu', email: 'thu.tt@gmail.com', total: '₫450,000', payment: 'Chờ thanh toán', status: 'Đang chuẩn bị', statusColor: '#f1c40f' },
  { id: '#ORD-9426', date: '23/05/2024', time: '18:45', customer: 'Lê Minh', email: 'minh.le@gmail.com', total: '₫2,890,000', payment: 'Đã thanh toán', status: 'Hoàn thành', statusColor: '#2ecc71' },
  { id: '#ORD-9425', date: '23/05/2024', time: '09:10', customer: 'Phạm Hùng', email: 'hung.p@gmail.com', total: '₫620,000', payment: 'Đã hoàn tiền', status: 'Đã hủy', statusColor: '#e74c3c' },
  { id: '#ORD-9424', date: '22/05/2024', time: '15:20', customer: 'Hoàng Nam', email: 'nam.h@gmail.com', total: '₫1,100,000', payment: 'Chờ thanh toán', status: 'Đang chuẩn bị', statusColor: '#f1c40f' },
  { id: '#ORD-9423', date: '22/05/2024', time: '11:05', customer: 'Lê Thúy', email: 'thuy.l@gmail.com', total: '₫3,200,000', payment: 'Đã thanh toán', status: 'Đang giao', statusColor: '#3498db' },
];

const OrderList = () => {
  const [tab, setTab] = useState(0);

  const filteredOrders = orders.filter(order => {
    if (tab === 0) return true;
    if (tab === 1) return order.payment === 'Chờ thanh toán';
    if (tab === 2) return order.status === 'Đang chuẩn bị';
    if (tab === 3) return order.status === 'Đang giao';
    if (tab === 4) return order.status === 'Hoàn thành';
    if (tab === 5) return order.status === 'Đã hủy';
    return true;
  });

  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#111' }}>
            Quản lý đơn hàng
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Theo dõi, cập nhật và xử lý tất cả các đơn đặt hàng từ khách hàng của bạn.
          </Typography>
        </Box>

      </Box>

      {/* Stats Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card sx={{ p: 3, borderRadius: '16px', border: '1px solid #f0f0f0', boxShadow: 'none' }}>
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#666', letterSpacing: '0.5px' }}>
                {item.label}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {item.value}
                </Typography>
                {item.change && (
                  <Typography variant="caption" sx={{ color: item.isPositive ? '#2ecc71' : '#e74c3c', fontWeight: 700 }}>
                    {item.change}
                  </Typography>
                )}
                {item.warning && (
                  <Box sx={{ bgcolor: '#fee2e2', color: '#dc2626', px: 1, py: 0.5, borderRadius: '4px', display: 'inline-flex', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.65rem' }}>{item.warning}</Typography>
                  </Box>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Content Area */}
      <Card sx={{ borderRadius: '16px', border: '1px solid #f0f0f0', boxShadow: 'none', overflow: 'hidden' }}>
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            sx={{
              '& .MuiTabs-indicator': { bgcolor: '#C9A96E' },
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                color: '#666',
                '&.Mui-selected': { color: '#C9A96E' }
              }
            }}
          >
            <Tab label="Tất cả (1,284)" />
            <Tab label="Chưa thanh toán (12)" />
            <Tab label="Đang chuẩn bị (28)" />
            <Tab label="Đang giao (56)" />
            <Tab label="Hoàn thành (1,154)" />
            <Tab label="Đã hủy (34)" />
          </Tabs>
        </Box>

        {/* Filter Bar */}
        <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <TextField
            placeholder="Tìm kiếm mã đơn hàng, tên khách hàng..."
            size="small"
            sx={{ flexGrow: 1, '& .MuiOutlinedInput-root': { borderRadius: '10px', bgcolor: '#f9fafb' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#9ca3af' }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            startIcon={<CalendarToday />}
            sx={{ borderRadius: '10px', color: '#666', borderColor: '#e5e7eb', textTransform: 'none' }}
          >
            Thời gian
          </Button>
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            sx={{ borderRadius: '10px', color: '#666', borderColor: '#e5e7eb', textTransform: 'none' }}
          >
            Lọc thêm
          </Button>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ border: '1px solid #e5e7eb', borderRadius: '10px' }}><FileDownload /></IconButton>
            <IconButton sx={{ border: '1px solid #e5e7eb', borderRadius: '10px' }}><Print /></IconButton>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: '#f9fafb' }}>
              <TableRow>
                <TableCell padding="checkbox"><Checkbox size="small" /></TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#666' }}>MÃ ĐƠN HÀNG</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#666' }}>NGÀY TẠO</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#666' }}>KHÁCH HÀNG</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#666' }}>TỔNG TIỀN</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#666' }}>THANH TOÁN</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#666' }}>TRẠNG THÁI</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem', color: '#666' }} align="right">THAO TÁC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell padding="checkbox"><Checkbox size="small" /></TableCell>
                  <TableCell sx={{ fontWeight: 700, color: '#002060' }}>{order.id}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{order.date}</Typography>
                    <Typography variant="caption" color="textSecondary">{order.time}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: '#f0f4ff', color: '#002060', fontSize: '0.8rem', fontWeight: 700 }}>
                        {order.customer.split(' ').map(n => n[0]).join('').slice(-2).toUpperCase()}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{order.customer}</Typography>
                        <Typography variant="caption" color="textSecondary">{order.email}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>{order.total}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.payment}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        bgcolor: order.payment === 'Đã thanh toán' ? '#ecfdf5' : order.payment === 'Chờ thanh toán' ? '#fffbeb' : '#fef2f2',
                        color: order.payment === 'Đã thanh toán' ? '#059669' : order.payment === 'Chờ thanh toán' ? '#d97706' : '#dc2626',
                        borderRadius: '6px'
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: order.statusColor }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: order.statusColor }}>{order.status}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small"><MoreVert /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer / Pagination */}
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            Hiển thị 1 đến 10 trong 1,284 kết quả
          </Typography>
          <Pagination
            count={129}
            shape="rounded"
            sx={{
              '& .Mui-selected': { bgcolor: '#002060 !important', color: '#fff' },
              '& .MuiPaginationItem-root': { fontWeight: 700 }
            }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default OrderList;
