import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostDetail } from '../service/post-detail-service';

export default function PostDetailFetcher() {
  const { postId } = useParams();
  const [postDetailData, setPostDetailData] = useState({});

  useEffect(() => {
    if (!postId) return;
    const fetchData = async () => {
      const data = await fetchPostDetail(postId);
      console.log(data);
    };
    fetchData();
  }, [postId]);

  if (!postId) {
    return <p>요청한 URL이 유효하지 않아요.</p>;
  }
}
