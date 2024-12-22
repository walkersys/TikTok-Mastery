import { trackEvent } from './base'

export const events = {
  FORM_SUBMIT: 'form_submit',
  PRICING_SELECT: 'pricing_select',
  VIDEO_PLAY: 'video_play',
  SECTION_VIEW: 'section_view',
} as const

export const trackFormSubmission = (formId: string, success: boolean) => {
  trackEvent(events.FORM_SUBMIT, {
    form_id: formId,
    success,
  })
}

export const trackPricingSelection = (plan: string, price: number) => {
  trackEvent(events.PRICING_SELECT, {
    plan,
    price,
  })
}

export const trackVideoPlay = (videoId: string, title: string) => {
  trackEvent(events.VIDEO_PLAY, {
    video_id: videoId,
    title,
  })
}

export const trackSectionView = (sectionId: string) => {
  trackEvent(events.SECTION_VIEW, {
    section_id: sectionId,
  })
}