import { useState } from 'react';
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
  Checkbox,
  Menu,
  MenuItem
} from '@mui/material';
import { 
  Search, 
  CalendarToday, 
  FilterList, 
  FileDownload, 
  Print,
  MoreVert
} from '@mui/icons-material';

const stats = [
  { label: 'TỔNG ĐƠN HÀNG', value: '1,284', change: '+12%', isPositive: true },
  { label: 'ĐÃ XỬ LÝ', value: '1,154', change: '+8.4%', isPositive: true },
  { label: 'ĐANG CHỜ XỬ LÝ', value: '42', change: '-5.2%', isPositive: false },
  { label: 'ĐÃ HỦY', value: '10', change: '-2.5%', isPositive: false },
  { label: 'TỶ LỆ HỦY ĐƠN', value: '0.8%', change: '+0.2%', isPositive: true },
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
  const [searchQuery, setSearchQuery] = useState('');
  const [dateAnchorEl, setDateAnchorEl] = useState(null);
  const [dateFilter, setDateFilter] = useState('Tất cả thời gian');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [paymentFilter, setPaymentFilter] = useState('Tất cả thanh toán');

  const handleDateClick = (event) => setDateAnchorEl(event.currentTarget);
  const handleDateClose = (value) => {
    if (value) setDateFilter(value);
    setDateAnchorEl(null);
  };

  const handleFilterClick = (event) => setFilterAnchorEl(event.currentTarget);
  const handleFilterClose = (value) => {
    if (value) setPaymentFilter(value);
    setFilterAnchorEl(null);
  };

  const filteredOrders = orders.filter(order => {
    // Tab filter (Status)
    const matchesTab = 
      tab === 0 || 
      (tab === 1 && order.payment === 'Chờ thanh toán') ||
      (tab === 2 && order.status === 'Đang chuẩn bị') ||
      (tab === 3 && order.status === 'Đang giao') ||
      (tab === 4 && order.status === 'Hoàn thành') ||
      (tab === 5 && order.status === 'Đã hủy');

    if (!matchesTab) return false;

    // Search filter
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      order.id.toLowerCase().includes(searchLower) ||
      order.customer.toLowerCase().includes(searchLower) ||
      order.email.toLowerCase().includes(searchLower);

    if (!matchesSearch) return false;

    // Payment filter
    if (paymentFilter !== 'Tất cả thanh toán' && order.payment !== paymentFilter) return false;

    // Date filter
    if (dateFilter === 'Hôm nay') return order.date === '24/05/2024';
    if (dateFilter === 'Tháng này') return order.date.includes('/05/2024');

    return true;
  });

  const handlePrint = () => window.print();

  const handleExport = () => {
    const headers = ["Mã đơn hàng", "Ngày tạo", "Khách hàng", "Email", "Tổng tiền", "Thanh toán", "Trạng thái"];
    const csvRows = filteredOrders.map(order => [
      order.id, `"${order.date} ${order.time}"`, `"${order.customer}"`, `"${order.email}"`, `"${order.total}"`, `"${order.payment}"`, `"${order.status}"`
    ].join(','));
    const csvContent = "\uFEFF" + [headers.join(','), ...csvRows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Orders_${new Date().toLocaleDateString('vi-VN')}.csv`;
    link.click();
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#111' }}>Quản lý đơn hàng</Typography>
        <Typography variant="body2" color="textSecondary">Theo dõi và xử lý tất cả các đơn hàng từ khách hàng.</Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card sx={{ p: 3, borderRadius: '16px', border: '1px solid #f0f0f0', boxShadow: 'none' }}>
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#666' }}>{item.label}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{item.value}</Typography>
                <Typography variant="caption" sx={{ color: item.isPositive ? '#2ecc71' : '#e74c3c', fontWeight: 700 }}>{item.change}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Content */}
      <Card sx={{ borderRadius: '16px', border: '1px solid #f0f0f0', boxShadow: 'none' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ '& .MuiTabs-indicator': { bgcolor: '#C9A96E' }, '& .MuiTab-root': { fontWeight: 600, '&.Mui-selected': { color: '#C9A96E' } } }}>
            <Tab label="Tất cả" /><Tab label="Chưa thanh toán" /><Tab label="Đang chuẩn bị" /><Tab label="Đang giao" /><Tab label="Hoàn thành" /><Tab label="Đã hủy" />
          </Tabs>
        </Box>

        <Box sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <TextField 
            placeholder="Tìm kiếm mã đơn, khách hàng..." size="small" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ flexGrow: 1, '& .MuiOutlinedInput-root': { borderRadius: '10px', bgcolor: '#f9fafb' } }}
            InputProps={{ startAdornment: (<InputAdornment position="start"><Search sx={{ color: '#9ca3af' }} /></InputAdornment>) }}
          />
          <Button variant="outlined" startIcon={<CalendarToday />} onClick={handleDateClick} sx={{ borderRadius: '10px', textTransform: 'none' }}>{dateFilter}</Button>
          <Menu anchorEl={dateAnchorEl} open={Boolean(dateAnchorEl)} onClose={() => handleDateClose()}>
            <MenuItem onClick={() => handleDateClose('Tất cả thời gian')}>Tất cả thời gian</MenuItem>
            <MenuItem onClick={() => handleDateClose('Hôm nay')}>Hôm nay</MenuItem>
            <MenuItem onClick={() => handleDateClose('Tháng này')}>Tháng này</MenuItem>
          </Menu>

          <Button variant="outlined" startIcon={<FilterList />} onClick={handleFilterClick} sx={{ borderRadius: '10px', textTransform: 'none' }}>{paymentFilter}</Button>
          <Menu anchorEl={filterAnchorEl} open={Boolean(filterAnchorEl)} onClose={() => handleFilterClose()}>
            <MenuItem onClick={() => handleFilterClose('Tất cả thanh toán')}>Tất cả thanh toán</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Đã thanh toán')}>Đã thanh toán</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Chờ thanh toán')}>Chờ thanh toán</MenuItem>
            <MenuItem onClick={() => handleFilterClose('Đã hoàn tiền')}>Đã hoàn tiền</MenuItem>
          </Menu>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={handleExport} sx={{ border: '1px solid #e5e7eb', borderRadius: '10px' }}><FileDownload /></IconButton>
            <IconButton onClick={handlePrint} sx={{ border: '1px solid #e5e7eb', borderRadius: '10px' }}><Print /></IconButton>
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: '#f9fafb' }}>
              <TableRow>
                <TableCell padding="checkbox"><Checkbox size="small" /></TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem' }}>MÃ ĐƠN HÀNG</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem' }}>NGÀY TẠO</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem' }}>KHÁCH HÀNG</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem' }}>TỔNG TIỀN</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem' }}>THANH TOÁN</TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: '0.75rem' }}>TRẠNG THÁI</TableCell>
                <TableCell align="right">THAO TÁC</TableCell>
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
                      <Avatar sx={{ width: 32, height: 32, bgcolor: '#f0f4ff', color: '#002060', fontSize: '0.8rem', fontWeight: 700 }}>{order.customer[0]}</Avatar>
                      <Box><Typography variant="body2" sx={{ fontWeight: 600 }}>{order.customer}</Typography><Typography variant="caption">{order.email}</Typography></Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>{order.total}</TableCell>
                  <TableCell>
                    <Chip label={order.payment} size="small" sx={{ fontWeight: 700, borderRadius: '6px', bgcolor: order.payment === 'Đã thanh toán' ? '#ecfdf5' : '#fffbeb', color: order.payment === 'Đã thanh toán' ? '#059669' : '#d97706' }} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: order.statusColor }}>{order.status}</Typography>
                  </TableCell>
                  <TableCell align="right"><IconButton size="small"><MoreVert /></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="textSecondary">Hiển thị {filteredOrders.length} kết quả</Typography>
          <Pagination count={1} shape="rounded" />
        </Box>
      </Card>
    </Box>
  );
};

export default OrderList;
