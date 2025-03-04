


export const reserveTable = (formData) => {
    return async (dispatch) => {
      try {
        const response = await fetch('/api/reservations', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        dispatch({ type: 'RESERVE_TABLE', payload: data });
      } catch (error) {
        console.error('Error:', error);
      }
    };
  };
  