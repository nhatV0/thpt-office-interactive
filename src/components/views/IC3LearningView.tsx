import React, { useState, useEffect } from 'react';
import { IC3_COURSES_DATA } from '../../data/ic3CoursesData';
import type { IC3CourseId, IC3Topic } from '../../types/ic3Course';
import { useLearning } from '../../context/LearningContext';
import {
  ArrowLeft,
  BookOpen,
  Award,
  Download,
  ExternalLink,
  CheckCircle2,
  Trophy,
  HelpCircle,
  FileText,
  Menu,
  X,
  Clock,
  ChevronRight,
  RotateCcw,
  Lightbulb,
  Bookmark,
  Check
} from 'lucide-react';
interface IC3LearningViewProps {
  courseId: IC3CourseId;
  onBackToCourses: () => void;
  initialTopicId?: string;
  onTopicChange?: (topicId: string) => void;
}

export const IC3LearningView: React.FC<IC3LearningViewProps> = ({
  courseId,
  onBackToCourses,
  initialTopicId,
  onTopicChange
}) => {
  const { addXP } = useLearning();
  const courseData = IC3_COURSES_DATA[courseId] || IC3_COURSES_DATA['ic3-level-1'];

  const [activeTopicId, setActiveTopicId] = useState<string>(
    initialTopicId && courseData.topics.some(t => t.id === initialTopicId)
      ? initialTopicId
      : courseData.topics[0]?.id || ''
  );

  const [activeTab, setActiveTab] = useState<'pdf' | 'flashcards' | 'quiz'>('pdf');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Completed topics quiz tracking
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`ic3_${courseId}_quiz_done`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Quiz state for active topic
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [xpAwarded, setXpAwarded] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(`ic3_${courseId}_quiz_done`, JSON.stringify(completedTopics));
    } catch {
      // ignore
    }
  }, [courseId, completedTopics]);


  const currentTopic: IC3Topic =
    courseData.topics.find(t => t.id === activeTopicId) || courseData.topics[0];

  const handleSelectTopic = (topicId: string) => {
    setActiveTopicId(topicId);
    setIsSidebarOpen(false);
    onTopicChange?.(topicId);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setXpAwarded(false);
  };

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmitQuiz = () => {
    if (quizSubmitted || !currentTopic) return;

    let correctCount = 0;
    currentTopic.quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const totalQuestions = currentTopic.quizQuestions.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    setQuizScore(scorePercent);
    setQuizSubmitted(true);

    // If passed (>= 70%), award XP and mark completed
    if (scorePercent >= 70 && !completedTopics[currentTopic.id]) {
      setCompletedTopics(prev => ({
        ...prev,
        [currentTopic.id]: true
      }));
      if (!xpAwarded) {
        addXP(100);
        setXpAwarded(true);
      }
    }
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / courseData.topics.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBackToCourses}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Quay lại danh sách khóa học"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  <Award className="w-3 h-3" />
                  IC3 Digital Literacy GS6
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 hidden md:inline">
                  {courseData.levelBadge}
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold truncate text-slate-900 dark:text-white">
                {courseData.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Progress Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="font-semibold">{completedCount}/{courseData.topics.length}</span>
              <span className="text-slate-400">chủ đề</span>
              <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden ml-1">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Danh sách chủ đề"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6 relative">
        {/* Backdrop for mobile drawer */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar: Topics List */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 transition-transform duration-200 lg:static lg:w-80 lg:inset-auto lg:p-0 lg:border-0 lg:bg-transparent lg:dark:bg-transparent lg:z-auto flex flex-col gap-3 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="flex items-center justify-between lg:hidden mb-2">
            <h2 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-500" />
              7 Chủ Đề Cốt Lõi
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Khung Chương Trình
              </span>
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                {progressPercent}% hoàn thành
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Hoàn thành trắc nghiệm để mở khóa điểm XP và chứng nhận bài học.
            </p>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {courseData.topics.map(topic => {
              const isActive = topic.id === activeTopicId;
              const isDone = Boolean(completedTopics[topic.id]);

              return (
                <button
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 group ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500/40 dark:border-cyan-500/30 text-slate-900 dark:text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isDone
                        ? 'bg-emerald-500 text-white'
                        : isActive
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-slate-200'
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4" /> : topic.order}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {topic.code}
                      </span>
                      <span className="text-[10px] text-slate-600 dark:text-slate-300 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {topic.durationMinutes}m
                      </span>
                    </div>
                    <div className="text-xs font-bold truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      Chủ đề {topic.order}: {topic.title}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate mt-0.5 font-medium">
                      {topic.englishTitle}
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-cyan-500 translate-x-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Curriculum PDF Download card */}
          <div className="p-3 bg-slate-100 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Khung chương trình</span>
            </div>
            <a
              href="/ic3-assets/giao-trinh/khung-chuong-trinh-ic3-gs6.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-cyan-600 dark:text-cyan-400 inline-flex items-center gap-1 font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              PDF
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Topic Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    Chủ đề {currentTopic.order} / 7
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Thời lượng khuyến nghị: {currentTopic.durationMinutes} phút
                  </span>
                  {completedTopics[currentTopic.id] && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Đã hoàn thành
                    </span>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {currentTopic.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {currentTopic.summary}
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeTab === 'pdf'
                      ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Giáo trình PDF
                </button>
                <button
                  onClick={() => setActiveTab('flashcards')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeTab === 'flashcards'
                      ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  Trọng tâm kiến thức
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeTab === 'quiz'
                      ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  Trắc nghiệm ({currentTopic.quizQuestions.length})
                </button>
              </div>
            </div>
          </div>

          {/* TAB 1: PDF Viewer */}
          {activeTab === 'pdf' && (
            <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FileText className="w-4 h-4 text-cyan-500" />
                  <span className="font-medium">{currentTopic.pdfFileName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={currentTopic.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Mở tab mới
                  </a>
                  <a
                    href={currentTopic.pdfUrl}
                    download={currentTopic.pdfFileName}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Tải PDF
                  </a>
                </div>
              </div>

              <div className="flex-1 min-h-[600px] w-full bg-slate-100 dark:bg-slate-950 relative">
                <iframe
                  src={`${currentTopic.pdfUrl}#toolbar=1&navpanes=0`}
                  title={`Giáo trình IC3 ${currentTopic.title}`}
                  className="w-full h-full min-h-[650px] border-0"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Flashcards & Key Knowledge */}
          {activeTab === 'flashcards' && (
            <div className="space-y-6">
              {/* Core Knowledge Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTopic.coreKnowledge.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/20">
                        {idx + 1}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Glossary / Key Terms */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Bookmark className="w-5 h-5 text-cyan-500" />
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Thuật Ngữ Chuyên Ngành IC3 Cần Ghi Nhớ
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {currentTopic.keyTerms.map((term, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60"
                    >
                      <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                        {term.term}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {term.definition}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Interactive Quiz */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              {/* Score Banner when submitted */}
              {quizSubmitted && (
                <div
                  className={`p-6 rounded-2xl border ${
                    quizScore >= 70
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                      : 'bg-amber-50 dark:bg-amber-950/40 border-amber-500/30 text-amber-900 dark:text-amber-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${
                          quizScore >= 70 ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                        }`}
                      >
                        {quizScore}%
                      </div>
                      <div>
                        <h4 className="font-bold text-base">
                          {quizScore >= 70 ? 'Chúc mừng! Bạn đã vượt qua bài kiểm tra' : 'Chưa đạt chuẩn IC3 (yêu cầu ≥ 70%)'}
                        </h4>
                        <p className="text-xs opacity-90 mt-0.5">
                          {quizScore >= 70
                            ? 'Bạn đã nắm vững kiến thức chủ đề này và được thưởng +100 XP.'
                            : 'Hãy ôn lại phần trọng tâm kiến thức và thực hiện lại bài trắc nghiệm nhé.'}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleRetakeQuiz}
                      className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-semibold text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-flex items-center gap-2 self-start sm:self-auto"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Làm lại bài thi
                    </button>
                  </div>
                </div>
              )}

              {/* Questions list */}
              <div className="space-y-4">
                {currentTopic.quizQuestions.map((q, qIdx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {qIdx + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                            {q.question}
                          </p>
                          <span className="text-[10px] text-slate-600 dark:text-slate-400 mt-1 inline-block font-medium">
                            Miền năng lực: {q.domain}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAnswer === optIdx;
                          let btnStyle =
                            'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-cyan-400';

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnStyle =
                                'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-medium';
                            } else if (isSelected && !isCorrect) {
                              btnStyle =
                                'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-700 dark:text-rose-300';
                            } else {
                              btnStyle =
                                'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60 text-slate-500';
                            }
                          } else if (isSelected) {
                            btnStyle =
                              'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-500 text-cyan-700 dark:text-cyan-300 font-medium shadow-xs';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              disabled={quizSubmitted}
                              className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all duration-150 flex items-start gap-2.5 ${btnStyle}`}
                            >
                              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px] shrink-0 font-bold mt-0.5">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="flex-1 leading-relaxed">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation box after submission */}
                      {quizSubmitted && (
                        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200 mb-1">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            Giải thích chi tiết chuẩn IC3:
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Quiz Action Button */}
              {!quizSubmitted && (
                <div className="flex justify-end pt-2 pb-6">
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Nộp Bài & Chấm Điểm ({Object.keys(selectedAnswers).length}/{currentTopic.quizQuestions.length})
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
