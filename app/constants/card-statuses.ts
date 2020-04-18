enum CardStatuses {
  MatchStatusTPendingHPending = 0,
	MatchStatusTLikeHPending    = 10,
	MatchStatusTDislikeHPending = 20,
	MatchStatusTSuspendHPending = 30,

	MatchStatusTPendingHLike = 1,
	MatchStatusTLikeHLike    = 11,
	MatchStatusTDislikeHLike = 21,
	MatchStatusTSuspendHLike = 31,

	MatchStatusTPendingHDislike = 2,
	MatchStatusTLikeHDislike    = 12,
	MatchStatusTDislikeHDislike = 22,
	MatchStatusTSuspendHDislike = 32,

	MatchStatusTPendingHSuspend = 3,
	MatchStatusTLikeHSuspend    = 13,
	MatchStatusTDislikeHSuspend = 23,
	MatchStatusTSuspendHSuspend = 33,
}

export default CardStatuses;