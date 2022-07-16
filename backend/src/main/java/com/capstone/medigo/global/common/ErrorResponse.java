package com.capstone.medigo.global.common;

public record ErrorResponse(
    String message,
    String cause
) {
    public static ErrorResponse of(ErrorCode errorCode, String cause) {
        return new ErrorResponse(errorCode.getMessage(), cause);
    }
}