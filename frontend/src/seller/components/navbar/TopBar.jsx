import React from 'react';
import { 
  Box, 
  InputBase, 
  IconButton, 
  Badge, 
  Avatar, 
  Typography 
} from '@mui/material';
import { 
  Search, 
  NotificationsNone, 
  ChatBubbleOutline 
} from '@mui/icons-material';

const TopBar = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      p: 3,
      bgcolor: 'transparent'
    }}>
      {/* Search bar */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        bgcolor: '#fff', 
        px: 2, 
        py: 1, 
        borderRadius: '12px',
        width: 400,
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        border: '1px solid #EAEAEA'
      }}>
        <Search sx={{ color: 'gray', mr: 1, fontSize: 20 }} />
        <InputBase 
          placeholder="Tìm kiếm tồn kho, đơn hàng..." 
          sx={{ flex: 1, fontSize: '0.9rem' }} 
        />
      </Box>

      {/* Right side icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton sx={{ bgcolor: '#fff', border: '1px solid #EAEAEA' }}>
          <ChatBubbleOutline fontSize="small" />
        </IconButton>
        
        <IconButton sx={{ bgcolor: '#fff', border: '1px solid #EAEAEA' }}>
          <Badge color="error" variant="dot">
            <NotificationsNone fontSize="small" />
          </Badge>
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 1 }}>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1 }}>
              Nguyễn Thành Long
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Chủ cửa hàng
            </Typography>
          </Box>
          <Avatar 
            src="https://mui.com/static/images/avatar/1.jpg" 
            sx={{ width: 40, height: 40, borderRadius: '12px' }} 
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
