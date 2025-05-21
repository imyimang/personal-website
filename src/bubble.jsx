import React, { useRef, useState, useEffect } from 'react';

const OverlayImageDownload = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [showContainer, setShowContainer] = useState(false);
  const [bubbleLoaded, setBubbleLoaded] = useState(false);

  const uploadedImageRef = useRef(null);
  const bubbleOverlayRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target.result);
      setShowContainer(true);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = async () => {
    const uploadedImage = uploadedImageRef.current;
    const bubbleOverlay = bubbleOverlayRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!uploadedImage || !bubbleOverlay || !bubbleOverlay.complete) {
      alert('圖片載入失敗，請確認圖片與對話框都正確。');
      return;
    }

    if (!ctx) {
      alert('無法取得 Canvas 2D context。');
      return;
    }

    await Promise.all([
      new Promise((resolve, reject) => {
        if (uploadedImage.complete && uploadedImage.naturalWidth !== 0) resolve();
        else {
          uploadedImage.onload = () => resolve();
          uploadedImage.onerror = () => reject();
        }
      }),
      new Promise((resolve, reject) => {
        if (bubbleOverlay.complete && bubbleOverlay.naturalWidth !== 0) resolve();
        else {
          bubbleOverlay.onload = () => resolve();
          bubbleOverlay.onerror = () => reject();
        }
      })
    ]);

    const width = uploadedImage.naturalWidth;
    const height = uploadedImage.naturalHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(uploadedImage, 0, 0, width, height);

    const bubbleHeight = (bubbleOverlay.naturalHeight * width) / bubbleOverlay.naturalWidth;
    ctx.drawImage(bubbleOverlay, 0, 0, width, bubbleHeight);

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'composite_image.png';
    link.click();
  };

  // 創建隔離的樣式，避免受全域CSS影響
  // 移除 all: initial，改用其他隔離方法，保留滾動功能
  const isolatedStyles = {
    wrapper: {
      /* 移除 all: initial，改用更精確的樣式重置 */
      display: 'block',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.5',
      fontSize: '16px',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      background: '#f0f0f0',
      borderRadius: '8px',
      /* 確保內容可滾動 */
      overflow: 'visible',
      position: 'relative',
    },
    page: {
      background: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      color: '#333',
      /* 確保內容可滾動 */
      overflow: 'visible',
      width: '100%',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
    },
    input: {
      marginBottom: '15px',
      display: 'block',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      width: '100%',
      maxWidth: '400px',
      boxSizing: 'border-box',
      backgroundColor: '#fff',
      color: '#333',
    },
    container: {
      position: 'relative',
      display: 'inline-block',
      maxWidth: '100%',
      marginBottom: '20px',
      boxSizing: 'border-box',
    },
    uploadedImage: {
      width: '100%',
      maxWidth: '400px',
      display: 'block',
      boxSizing: 'border-box',
      border: 'none',
      borderRadius: '4px',
    },
    bubbleOverlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: 'auto',
      zIndex: '10',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      border: 'none',
    },
    downloadBtn: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'normal',
      textAlign: 'center',
      display: 'inline-block',
      margin: '0',
      textDecoration: 'none',
      boxShadow: 'none',
      lineHeight: '1.5',
      outline: 'none',
    },
    hiddenCanvas: {
      display: 'none',
      visibility: 'hidden',
      position: 'absolute',
      left: '-9999px',
    }
  };

  // 進入 bubble 頁面時加上 .bubble-page，離開時移除
  useEffect(() => {
    document.body.classList.add('bubble-page');
    return () => {
      document.body.classList.remove('bubble-page');
    };
  }, []);

  // 創建一個自包含的樣式範圍，而不完全重置所有樣式
  return (
    <div className="overlay-image-download-component" style={isolatedStyles.wrapper}>
      <div style={isolatedStyles.page}>
        <h2 style={isolatedStyles.title}>圖片上方加 PNG 對話框並下載</h2>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={isolatedStyles.input}
        />

        {showContainer && (
          <div style={isolatedStyles.container}>
            <img
              ref={uploadedImageRef}
              src={imageSrc}
              alt="Uploaded"
              style={isolatedStyles.uploadedImage}
            />
            <img
              ref={bubbleOverlayRef}
              src="/bubble.png"
              alt="Speech Bubble"
              style={isolatedStyles.bubbleOverlay}
              onLoad={() => setBubbleLoaded(true)}
              onError={() => {
                alert('bubble.png 載入失敗，請確認路徑正確。');
                setBubbleLoaded(false);
              }}
            />
          </div>
        )}

        {showContainer && bubbleLoaded && (
          <button 
            onClick={handleDownload} 
            style={isolatedStyles.downloadBtn}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#45a049';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#4CAF50';
            }}
          >
            下載合成圖片
          </button>
        )}

        <canvas ref={canvasRef} style={isolatedStyles.hiddenCanvas} />
      </div>
    </div>
  );
};

// 添加一個className，允許更精確的樣式隔離
// 而不會影響其他DOM屬性如滾動
const styleResets = {
  '.overlay-image-download-component': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
    boxSizing: 'border-box',
  },
  '.overlay-image-download-component *': {
    boxSizing: 'border-box',
  }
};

// 如果需要，可以利用此函數動態創建樣式標籤
// 不過這裡我們使用內聯樣式，所以暫時不需要
const createStyleTag = (styles) => {
  if (typeof document !== 'undefined') {
    const styleTag = document.createElement('style');
    let styleText = '';
    
    Object.keys(styles).forEach(selector => {
      styleText += `${selector} {`;
      Object.keys(styles[selector]).forEach(prop => {
        styleText += `${prop}: ${styles[selector][prop]};`;
      });
      styleText += '}';
    });
    
    styleTag.textContent = styleText;
    document.head.appendChild(styleTag);
  }
};

export default OverlayImageDownload;