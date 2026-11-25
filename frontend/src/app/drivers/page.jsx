"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";

export default function DriversPage() {
  const { t } = useLanguage();
  const { sortedDrivers, submitDriverReview } = useApp();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // "all" | "available" | "auto" | "manual"
  const [selectedDriverForReview, setSelectedDriverForReview] = useState(null);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Filter logic
  const driverList = sortedDrivers || [];
  const filteredDrivers = driverList.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.city.toLowerCase().includes(search.toLowerCase()) ||
      driver.car.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;

    if (filter === "available") return driver.status === "available";
    if (filter === "auto") return driver.transmission.toLowerCase().includes("auto");
    if (filter === "manual") return driver.transmission.toLowerCase().includes("manual");

    return true;
  });

  const handleOpenReview = (driver) => {
    setSelectedDriverForReview(driver);
    setReviewRating(5);
    setReviewComment("");
    setReviewerName("");
    setReviewSubmitted(false);
  };

  const handleSendReview = (e) => {
    e.preventDefault();
    if (!selectedDriverForReview || !reviewComment.trim()) return;

    submitDriverReview(
      selectedDriverForReview.id,
      Number(reviewRating),
      reviewComment.trim(),
      reviewerName.trim() || "Verified Rider"
    );

    setReviewSubmitted(true);
    setTimeout(() => {
      setSelectedDriverForReview(null);
      setReviewSubmitted(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Page Header (Screen 02) */}
      <section className="border-b border-gray-200 py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t("findYourDriver")}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              {t("findYourDriverSub")}
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-black font-bold p-1"
                >
                  {t("clear")}
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  filter === "all"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t("allDrivers")}
              </button>
              <button
                type="button"
                onClick={() => setFilter("available")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-1.5 ${
                  filter === "available"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {t("available")}
              </button>
              <button
                type="button"
                onClick={() => setFilter("auto")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  filter === "auto"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t("autoSpecialists")}
              </button>
              <button
                type="button"
                onClick={() => setFilter("manual")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  filter === "manual"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t("manualSpecialists")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Drivers List */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {filteredDrivers.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-gray-300 rounded-3xl p-8">
              <p className="text-lg font-bold text-gray-800">{t("noDriversFound")}</p>
              <p className="text-sm text-gray-500 mt-1">{t("tryAnotherSearch")}</p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
                className="mt-4 px-5 py-2.5 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition"
              >
                {t("resetFilters")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrivers.map((driver, index) => {
                const isBusy = driver.status === "busy";
                const isTopRank = index === 0 && !search && filter === "all";

                return (
                  <div
                    key={driver.id}
                    className="relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:border-black transition-all hover:shadow-sm"
                  >
                    {/* Top Rank Badge */}
                    {isTopRank && (
                      <div className="absolute -top-3 left-6 bg-black text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                        {t("topChauffeurBadge")}
                      </div>
                    )}

                    <div>
                      {/* Header info */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                            {driver.avatar ? (
                              <img
                                src={driver.avatar}
                                alt={driver.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center font-extrabold text-base text-black">
                                {driver.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-lg text-black leading-tight">
                              {driver.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {driver.city} • {driver.car}
                            </p>
                          </div>
                        </div>

                        {/* Status badge */}
                        <div>
                          {isBusy ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black text-white">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                              {t("onTrip")}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gray-100 text-gray-800 border border-gray-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              {t("available")}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Details row */}
                      <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
                        <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">
                          {driver.experience}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">
                          {driver.transmission}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="mt-3 text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {driver.bio}
                      </p>

                      {/* Rating & Rate */}
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-black font-extrabold text-sm">★ {driver.rating}</span>
                          <span className="text-xs text-gray-400">
                            ({driver.trips} {t("trips")})
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-black text-lg text-black">
                            ₹{driver.rate}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">/hr</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        {/* Book CTA */}
                        <Link
                          href={`/book?driver=${driver.id}`}
                          className="flex-1 text-center py-2.5 px-4 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition shadow-sm"
                        >
                          {t("bookNow")}
                        </Link>

                        {/* WhatsApp connect button */}
                        <a
                          href={`https://wa.me/${driver.phone}?text=${encodeURIComponent(
                            `Hello ${driver.name}, I found your profile on DriveConnect and want to book you for a trip in ${driver.city}. Are you available?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-gray-700 hover:text-black flex items-center justify-center"
                          title={t("chatWhatsApp")}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
                          </svg>
                        </a>
                      </div>

                      {/* Rate / View reviews toggle */}
                      <button
                        type="button"
                        onClick={() => handleOpenReview(driver)}
                        className="w-full text-center py-2 text-[11px] font-semibold text-gray-500 hover:text-black transition flex items-center justify-center gap-1"
                      >
                        <span>{t("viewReviewsRate")}</span>
                        <span className="text-[10px]">({driver.reviews?.length || 0})</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Reviews & Rating Modal */}
      {selectedDriverForReview && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-black">
                  {selectedDriverForReview.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("rating")}: ★ {selectedDriverForReview.rating} ({selectedDriverForReview.trips} {t("trips")})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDriverForReview(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Existing verified reviews */}
            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                {t("verifiedRiderFeedback")}
              </h4>
              {selectedDriverForReview.reviews && selectedDriverForReview.reviews.length > 0 ? (
                <div className="space-y-3">
                  {selectedDriverForReview.reviews.map((rev, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-gray-900">
                        <span>{rev.author}</span>
                        <span className="text-black">★ {rev.rating}</span>
                      </div>
                      <p className="text-gray-600 mt-1">{rev.comment || rev.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 italic">{t("noReviewsYet")}</p>
              )}
            </div>

            {/* Leave a review form */}
            <form onSubmit={handleSendReview} className="mt-6 pt-5 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-3">
                {t("leaveReviewTitle")}
              </h4>

              {reviewSubmitted ? (
                <div className="p-4 rounded-xl bg-gray-900 text-white text-xs font-bold text-center">
                  {t("reviewSubmittedMsg")}
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">
                      {t("yourName")}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh K."
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">
                      {t("ratingStarsLabel")}
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className={`w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center transition ${
                            reviewRating >= star
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                          }`}
                        >
                          ★ {star}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-1">
                      {t("yourReviewPlaceholder")}
                    </label>
                    <textarea
                      required
                      rows="3"
                      placeholder={t("yourReviewPlaceholder")}
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition shadow-sm"
                  >
                    {t("submitReviewBtn")}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
