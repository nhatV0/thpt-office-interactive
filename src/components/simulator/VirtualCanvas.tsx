import React from 'react';
import type { ModuleType } from '../../types/curriculum';

interface VirtualCanvasProps {
  moduleType: ModuleType;
  wordState: {
    fontFamily: string;
    isBold: boolean;
    isItalic: boolean;
    align: 'left' | 'center' | 'right' | 'justify';
    margins: 'normal' | 'narrow' | 'wide';
    orientation: 'portrait' | 'landscape';
    paperSize: 'A4' | 'Letter';
    hasTable: boolean;
    tableMerged: boolean;
    hasHeaderRepeat: boolean;
    hasSmartArt: boolean;
    wrapStyle: string;
    hasCaption: boolean;
    hasPageNumber: boolean;
    differentFirstPage: boolean;
    headingStyle: string;
    hasTableOfContents: boolean;
    tocUpdated: boolean;
  };
  excelState: {
    selectedCell: string;
    formulaValue: string;
    cellValues: Record<string, string>;
    commaFormatted: boolean;
    mergedHeader: boolean;
    showFormulas: boolean;
    hasFilter: boolean;
    isSortedAsc: boolean;
    hasCondFormat: boolean;
    chartType: 'none' | 'column' | 'pie';
    hasDataLabels: boolean;
  };
  ppState: {
    currentSlideIndex: number;
    slides: Array<{
      id: number;
      title: string;
      subtitle: string;
      layout: 'title' | 'two-content';
      hasSmartArt: boolean;
      smartArtColor: string;
      transition: string;
      animation: string;
      distributed: boolean;
      hasHyperlink: boolean;
    }>;
    isSlideMasterOpen: boolean;
    isAnimationPaneOpen: boolean;
    isPresenterMode: boolean;
    isSlideShowRunning: boolean;
  };
  onCellClick?: (cellRef: string) => void;
  onFormulaChange?: (val: string) => void;
  onFormulaSubmit?: () => void;
  onSelectSlide?: (index: number) => void;
}

export const VirtualCanvas: React.FC<VirtualCanvasProps> = ({
  moduleType,
  wordState,
  excelState,
  ppState,
  onCellClick,
  onFormulaChange,
  onFormulaSubmit,
  onSelectSlide
}) => {
  if (moduleType === 'word') {
    const isLandscape = wordState.orientation === 'landscape';
    const alignClass =
      wordState.align === 'center'
        ? 'text-center'
        : wordState.align === 'right'
        ? 'text-right'
        : wordState.align === 'justify'
        ? 'text-justify'
        : 'text-left';

    return (
      <div className="flex-1 bg-slate-200 dark:bg-slate-950 p-2 sm:p-6 lg:p-8 flex justify-center items-start overflow-y-auto min-h-[360px] sm:min-h-[440px]">
        <div
          className={`bg-white text-slate-900 shadow-xl transition-all duration-300 relative border border-slate-300 flex flex-col justify-between ${
            isLandscape
              ? 'w-full max-w-[620px] min-h-[320px] sm:min-h-[380px] p-4 sm:p-6'
              : 'w-full max-w-[460px] min-h-[440px] sm:min-h-[580px] p-4 sm:p-8'
          }`}
          style={{ fontFamily: wordState.fontFamily === 'Times New Roman' ? '"Times New Roman", serif' : 'system-ui, sans-serif' }}
        >
          {/* Header area */}
          <div className="border-b border-dashed border-slate-300 pb-2 mb-4 text-xs text-slate-400 flex justify-between items-center">
            <span>[Header: Tài Liệu Báo Cáo THPT]</span>
            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
              Khổ: {wordState.paperSize} ({isLandscape ? 'Landscape' : 'Portrait'})
            </span>
          </div>

          {/* Body Content */}
          <div className="flex-1 flex flex-col gap-3">
            {/* National Header */}
            <div className="text-center text-xs pb-1 border-b border-slate-200">
              <p className="font-bold uppercase tracking-wide">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
              <p className="font-semibold italic">Độc lập - Tự do - Hạnh phúc</p>
            </div>

            {/* Document Title */}
            <h1
              className={`text-sm md:text-base leading-snug ${
                wordState.isBold ? 'font-bold' : 'font-normal'
              } ${wordState.isItalic ? 'italic' : ''} ${
                wordState.headingStyle === 'heading1'
                  ? 'text-sky-800 text-base font-bold border-l-4 border-sky-600 pl-2'
                  : ''
              }`}
            >
              BÁO CÁO KẾT QUẢ RÈN LUYỆN TIN HỌC VĂN PHÒNG
            </h1>

            {/* Table of Contents if added */}
            {wordState.hasTableOfContents && (
              <div className="bg-sky-50 border border-sky-200 rounded p-2 text-xs">
                <div className="font-bold text-sky-900 mb-1 flex justify-between items-center">
                  <span>MỤC LỤC TỰ ĐỘNG</span>
                  {wordState.tocUpdated && (
                    <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1 rounded">Đã cập nhật toàn bộ</span>
                  )}
                </div>
                <div className="space-y-1 text-slate-600">
                  <div className="flex justify-between">
                    <span>1. Giao diện & Page Setup</span>
                    <span className="text-slate-400">..................... 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2. Định dạng phông chữ chuẩn</span>
                    <span className="text-slate-400">..................... 2</span>
                  </div>
                </div>
              </div>
            )}

            {/* Sample Paragraph */}
            <p className={`text-xs md:text-sm text-slate-800 leading-relaxed ${alignClass}`}>
              Tin học văn phòng là kỹ năng thiết yếu đối với học sinh trung học phổ thông. Việc làm chủ Microsoft Word, Excel và PowerPoint giúp các bạn tự tin trong việc soạn thảo báo cáo đề tài nghiên cứu khoa học, xử lý số liệu thống kê chính xác và thuyết trình đồ án trực quan.
            </p>

            {/* Table representation */}
            {wordState.hasTable && (
              <div className="mt-1 border border-slate-300 rounded overflow-hidden text-xs">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300">
                      {wordState.tableMerged ? (
                        <th colSpan={3} className="p-1.5 text-center font-bold text-sky-900 bg-sky-50">
                          BẢNG ĐIỂM ĐÁNH GIÁ KỸ NĂNG (GỘP Ô TIÊU ĐỀ)
                        </th>
                      ) : (
                        <>
                          <th className="p-1 border-r border-slate-300 text-left">Môn học</th>
                          <th className="p-1 border-r border-slate-300 text-center">Thời lượng</th>
                          <th className="p-1 text-center">Trạng thái</th>
                        </>
                      )}
                    </tr>
                    {wordState.tableMerged && (
                      <tr className="bg-slate-50 border-b border-slate-300">
                        <th className="p-1 border-r border-slate-300 text-left">Môn học</th>
                        <th className="p-1 border-r border-slate-300 text-center">Thời lượng</th>
                        <th className="p-1 text-center">Trạng thái</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-1 border-r border-slate-300">Microsoft Word</td>
                      <td className="p-1 border-r border-slate-300 text-center">15 phút</td>
                      <td className="p-1 text-center text-emerald-600 font-semibold">Đã duyệt</td>
                    </tr>
                    <tr>
                      <td className="p-1 border-r border-slate-300">Microsoft Excel</td>
                      <td className="p-1 border-r border-slate-300 text-center">18 phút</td>
                      <td className="p-1 text-center text-sky-600 font-semibold">Đang học</td>
                    </tr>
                  </tbody>
                </table>
                {wordState.hasHeaderRepeat && (
                  <div className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 border-t border-slate-200">
                    * Đã bật Repeat Header Rows tự động khi sang trang
                  </div>
                )}
              </div>
            )}

            {/* SmartArt or Image Representation */}
            {wordState.hasSmartArt && (
              <div className="border border-sky-300 bg-sky-50/70 p-2 rounded flex items-center justify-around gap-2 text-xs text-sky-900">
                <div className="bg-sky-600 text-white p-2 rounded shadow text-center flex-1">
                  1. Thu thập dữ liệu
                </div>
                <span>&rarr;</span>
                <div className="bg-sky-700 text-white p-2 rounded shadow text-center flex-1">
                  2. Xử lý trên Excel
                </div>
                <span>&rarr;</span>
                <div className="bg-sky-800 text-white p-2 rounded shadow text-center flex-1">
                  3. Thuyết trình PPT
                </div>
              </div>
            )}

            {wordState.hasCaption && (
              <div className="text-center text-[11px] italic text-slate-600">
                Hình 1. Quy trình thực hiện chuyên đề học tập tương tác
              </div>
            )}
          </div>

          {/* Footer area */}
          <div className="border-t border-dashed border-slate-300 pt-2 mt-4 text-xs text-slate-400 flex justify-between items-center">
            <span>
              {wordState.differentFirstPage
                ? '[Trang 1: Đã ẩn số trang theo quy chuẩn Different First Page]'
                : '[Chân trang: Báo cáo học sinh THPT]'}
            </span>
            {wordState.hasPageNumber && !wordState.differentFirstPage && (
              <span className="font-bold text-slate-800 px-2 py-0.5 bg-slate-100 rounded">Trang 1</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (moduleType === 'excel') {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const defaultCellValues: Record<string, string> = {
      A1: 'DANH SÁCH ĐIỂM THI TIN HỌC VĂN PHÒNG',
      A2: 'Họ và tên',
      B2: 'Điểm Toán',
      C2: 'Điểm Tin',
      D2: 'Trung bình',
      E2: 'Xếp loại',
      A3: 'Nguyễn Văn An',
      B3: '8.5',
      C3: '9.0',
      D3: '8.75',
      E3: 'Giỏi',
      A4: 'Trần Thị Mai',
      B4: '7.0',
      C4: '8.0',
      D4: '7.5',
      E4: 'Khá',
      A5: 'Lê Hoàng Nam',
      B5: '4.5',
      C5: '4.0',
      D5: '4.25',
      E5: 'Yếu',
      A6: 'Phạm Hồng Phúc',
      B6: '9.0',
      C6: '9.5',
      D6: '9.25',
      E6: 'Giỏi',
      ...excelState.cellValues
    };

    return (
      <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2 sm:p-4 flex flex-col gap-2 overflow-auto">
        {/* Excel Formula Bar */}
        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded p-1.5 text-xs">
          <div className="px-2 py-0.5 font-mono font-bold bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 min-w-[50px] text-center">
            {excelState.selectedCell}
          </div>
          <span className="font-bold text-slate-400 italic">fx</span>
          <input
            type="text"
            className="flex-1 px-2 py-0.5 font-mono border-none focus:outline-none bg-transparent text-slate-800 dark:text-slate-100"
            placeholder='Nhập công thức (ví dụ: =SUM(B3:B6) hoặc =IF(C4>=5,"Đạt","Hỏng"))'
            value={excelState.formulaValue}
            onChange={e => onFormulaChange?.(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') onFormulaSubmit?.();
            }}
          />
          <button
            type="button"
            onClick={onFormulaSubmit}
            className="px-2.5 py-0.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium text-xs cursor-pointer"
          >
            Nhập
          </button>
        </div>

        {/* Chart View Overlay if chart is drawn */}
        {excelState.chartType !== 'none' && (
          <div className="bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800 rounded p-3 shadow-sm flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-bold text-emerald-800 dark:text-emerald-400 border-b pb-1">
              <span>
                {excelState.chartType === 'column'
                  ? 'BIỂU ĐỒ HÌNH CỘT: SO SÁNH ĐIỂM TIN HỌC'
                  : 'BIỂU ĐỒ HÌNH TRÒN: CƠ CẤU XẾP LOẠI HỌC LỰC'}
              </span>
              {excelState.hasDataLabels && (
                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                  Data Labels: Bật
                </span>
              )}
            </div>
            {excelState.chartType === 'column' ? (
              <div className="h-28 flex items-end justify-around gap-2 pt-2 border-b border-slate-200 dark:border-slate-800">
                <div className="flex flex-col items-center gap-1 flex-1">
                  {excelState.hasDataLabels && <span className="text-[10px] font-bold">9.0</span>}
                  <div className="w-full max-w-[36px] bg-emerald-500 rounded-t h-20"></div>
                  <span className="text-[10px] text-slate-500 truncate max-w-[60px]">Văn An</span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  {excelState.hasDataLabels && <span className="text-[10px] font-bold">8.0</span>}
                  <div className="w-full max-w-[36px] bg-emerald-600 rounded-t h-16"></div>
                  <span className="text-[10px] text-slate-500 truncate max-w-[60px]">Thị Mai</span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  {excelState.hasDataLabels && <span className="text-[10px] font-bold">4.0</span>}
                  <div className="w-full max-w-[36px] bg-rose-500 rounded-t h-8"></div>
                  <span className="text-[10px] text-slate-500 truncate max-w-[60px]">Hoàng Nam</span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  {excelState.hasDataLabels && <span className="text-[10px] font-bold">9.5</span>}
                  <div className="w-full max-w-[36px] bg-emerald-700 rounded-t h-24"></div>
                  <span className="text-[10px] text-slate-500 truncate max-w-[60px]">Hồng Phúc</span>
                </div>
              </div>
            ) : (
              <div className="h-28 flex items-center justify-center gap-6">
                <div className="w-20 h-20 rounded-full border-4 border-emerald-500 bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-800">
                  100%
                </div>
                <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-emerald-600 inline-block rounded-sm"></span>
                    <span>Giỏi: 50%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-emerald-400 inline-block rounded-sm"></span>
                    <span>Khá: 25%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-rose-400 inline-block rounded-sm"></span>
                    <span>Yếu: 25%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Spreadsheet Grid Table */}
        <div className="border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 rounded overflow-x-auto shadow-sm">
          <table className="w-full border-collapse font-mono text-xs">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                <th className="w-10 p-1 border-r border-b border-slate-300 dark:border-slate-700 text-center select-none">
                  #
                </th>
                {columns.map(col => (
                  <th
                    key={col}
                    className="p-1 border-r border-b border-slate-300 dark:border-slate-700 text-center font-bold min-w-[90px]"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row} className="border-b border-slate-200 dark:border-slate-800">
                  <td className="p-1 bg-slate-100 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 text-center text-slate-500 font-semibold select-none">
                    {row}
                  </td>
                  {columns.map(col => {
                    const cellKey = `${col}${row}`;
                    const isSelected = excelState.selectedCell === cellKey;
                    const cellVal = defaultCellValues[cellKey] || '';

                    // Check conditional format (e.g. value < 5)
                    const isNumber = !isNaN(Number(cellVal)) && cellVal.trim() !== '';
                    const isLessThanFive =
                      excelState.hasCondFormat && isNumber && Number(cellVal) < 5;

                    return (
                      <td
                        key={cellKey}
                        onClick={() => onCellClick?.(cellKey)}
                        className={`p-1.5 border-r border-slate-200 dark:border-slate-800 cursor-cell transition-colors select-none ${
                          isSelected
                            ? 'ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-950/50'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        } ${
                          isLessThanFive
                            ? 'bg-rose-100 text-rose-800 font-bold dark:bg-rose-950/80 dark:text-rose-200'
                            : ''
                        } ${
                          isNumber ? 'text-right' : 'text-left'
                        }`}
                      >
                        {excelState.showFormulas && cellVal.startsWith('=') ? (
                          <span className="text-sky-600 font-semibold">{cellVal}</span>
                        ) : excelState.commaFormatted && isNumber ? (
                          Number(cellVal).toLocaleString('en-US', { minimumFractionDigits: 1 })
                        ) : (
                          cellVal
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // PowerPoint Canvas
  const currentSlide = ppState.slides[ppState.currentSlideIndex] || ppState.slides[0];

  return (
    <div className="flex-1 bg-slate-200 dark:bg-slate-950 p-2 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-3 overflow-auto min-h-[360px] sm:min-h-[440px]">
      {/* Slide Thumbnails Column (horizontal on mobile, vertical on tablet/desktop) */}
      <div className="w-full sm:w-40 flex sm:flex-col flex-row gap-2 overflow-x-auto sm:overflow-y-auto pb-1 sm:pb-0 sm:pr-1 select-none border-b sm:border-b-0 sm:border-r border-slate-300 dark:border-slate-800 shrink-0">
        <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase px-1 hidden sm:block">
          Slides ({ppState.slides.length})
        </span>
        {ppState.slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelectSlide?.(idx)}
            className={`flex items-start gap-2 p-1.5 rounded border text-left cursor-pointer transition-all ${
              ppState.currentSlideIndex === idx
                ? 'border-rose-500 ring-2 ring-rose-300 dark:ring-rose-900 bg-white dark:bg-slate-800'
                : 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 hover:border-slate-400'
            }`}
          >
            <span className="text-xs font-bold text-slate-400 min-w-[12px]">{idx + 1}</span>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 truncate">
                {slide.title || 'Slide ' + (idx + 1)}
              </p>
              <div className="w-full h-8 mt-1 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[9px] text-slate-400">
                16:9
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Main Slide Stage */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {ppState.isSlideMasterOpen && (
          <div className="absolute top-0 inset-x-0 bg-rose-600 text-white text-xs px-3 py-1 font-bold z-10 flex justify-between items-center">
            <span>CHẾ ĐỘ THIẾT KẾ SLIDE MASTER (TRANG MẪU GỐC)</span>
            <span className="text-[10px] bg-rose-800 px-2 py-0.5 rounded">View Master</span>
          </div>
        )}

        <div className="w-full max-w-[640px] aspect-[16/9] bg-white text-slate-900 shadow-2xl rounded-lg p-3 sm:p-6 flex flex-col justify-between relative border border-slate-300 dark:border-slate-800 overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">
              THPT TIN HỌC VĂN PHÒNG
            </div>
            <div className="w-6 h-6 rounded bg-rose-600 text-white flex items-center justify-center font-bold text-[10px]">
              MOS
            </div>
          </div>

          {/* Slide Content */}
          <div className="flex-1 flex flex-col justify-center my-2 gap-3">
            {currentSlide.layout === 'title' ? (
              <div className="text-center space-y-2">
                <h1 className="text-lg md:text-xl font-bold text-slate-900">
                  {currentSlide.title}
                </h1>
                <p className="text-xs text-slate-600 max-w-[420px] mx-auto">
                  {currentSlide.subtitle}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-1">
                  {currentSlide.title}
                </h2>
                {currentSlide.hasSmartArt ? (
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-rose-50 border border-rose-200 p-2 rounded text-center font-medium text-rose-900">
                      Mục Tiêu 1
                    </div>
                    <div className="bg-rose-100 border border-rose-300 p-2 rounded text-center font-medium text-rose-900">
                      Mục Tiêu 2
                    </div>
                    <div className="bg-rose-200 border border-rose-400 p-2 rounded text-center font-medium text-rose-900">
                      Mục Tiêu 3
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                      <p className="font-semibold text-rose-700 mb-1">Nội dung 1</p>
                      <p>Quy chuẩn bố cục slide 16:9 hiện đại, dễ theo dõi.</p>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                      <p className="font-semibold text-rose-700 mb-1">Nội dung 2</p>
                      <p>Sử dụng phím tắt F5 và Presenter View khi thuyết trình.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Slide Footer */}
          <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-200 pt-1">
            <span>Báo cáo thuyết trình</span>
            <span>Hiệu ứng: {currentSlide.transition || 'None'}</span>
            <span>Slide {ppState.currentSlideIndex + 1} / {ppState.slides.length}</span>
          </div>
        </div>

        {/* Animation Pane floating panel if opened */}
        {ppState.isAnimationPaneOpen && (
          <div className="absolute right-2 top-2 bottom-2 w-48 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded shadow-lg p-2 text-xs z-20 flex flex-col">
            <span className="font-bold text-rose-700 dark:text-rose-400 pb-1 border-b">
              Animation Pane
            </span>
            <div className="flex-1 py-1 space-y-1">
              <div className="p-1 rounded bg-emerald-50 text-emerald-800 text-[11px] flex justify-between">
                <span>01. Fade (Title)</span>
                <span>0.5s</span>
              </div>
              <div className="p-1 rounded bg-emerald-50 text-emerald-800 text-[11px] flex justify-between">
                <span>02. Fly In (Content)</span>
                <span>After Prev</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
