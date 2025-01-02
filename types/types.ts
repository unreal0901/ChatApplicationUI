export type Message = {
  message: string;
  time: string;
  type: string;
  direction?: "incoming" | "outgoing";
  username?: string;
};

export type Tag = {
  id: number;
  name: string;
};

export type Platform = {
  icon: string;
  name: string;
};

export type Participant = {
  name: string;
  avatar: string;
  lastActive: string;
  location: string;
  email: string;
  phone: string;
  segment: string;
  lastVisited: string;
  isRead: boolean;
  isVerified: boolean;
  platform: {
    icon: string;
    name: string;
  };
  message: string;
  analytics: {
    orders: {
      count: number;
      price: number;
    };
    clicks: {
      totalClicks: number;
      linkClicks: number;
    };
  };
  messages: Message[];
  tags: Tag[];
};

export type Inbox = {
  name: string;
  count: number;
  icon: string;
  participants: Participant[];
};
