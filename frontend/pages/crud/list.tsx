import React, { useState } from 'react';
import type { FC } from 'react';
import { createItem, deleteById, Item } from './service';
import { useMutation, useQueryClient } from 'react-query';
import { queryKeys } from './queryKeys';

const List: FC = ({ listData }) => {
  const queryClient = useQueryClient();
  const [editable, setEditable] = useState(false);
  const [titleInputVal, setTitleInputVal] = useState<string>('');
  const [bodyInputVal, setBodyInputVal] = useState<string>('');
  const [clickedId, setClickedId] = useState<number>(1);
  const deleteItem = useMutation((id: number) => deleteById(id), {
    onSuccess: (data) => {
      console.log(data);
      console.log('성공한거야 ');
      queryClient.invalidateQueries(queryKeys.posts);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const editItem = useMutation((item: Item) => createItem(item), {
    onSuccess: (data) => {
      console.log(data);
      setEditable(!editable);
      queryClient.invalidateQueries(queryKeys.posts);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = (id: number) => {
    deleteItem.mutate(id);
  };
  const handleEdit = (id: number, title: string, body: string) => {
    setEditable(true);
    setClickedId(id);
    setTitleInputVal(title);
    setBodyInputVal(body);
    const editObj = {
      id: clickedId,
      title: titleInputVal,
      body: bodyInputVal,
    };
    editItem.mutate(editObj);
  };

  return (
    <div>
      {listData?.posts.map(({ id, title, body }) => (
        <ul key={id}>
          <li>id : {id}</li>
          {editable && clickedId === id ? (
            <div>
              <label>
                메뉴 이름 :
                <input
                  value={titleInputVal}
                  placeholder="수정할 제목을 입력해주세요"
                  onChange={(e) => setTitleInputVal(e.target.value)}
                />
              </label>
              <label>
                가격 :
                <input
                  value={bodyInputVal}
                  placeholder="수정할 내용을 입력해주세요"
                  onChange={(e) => setBodyInputVal(parseInt(e.target.value))}
                />
              </label>
            </div>
          ) : (
            <div>
              <li>제목 : {title}</li>
              <li>내용: {body}</li>
            </div>
          )}

          <button onClick={() => handleDelete(id)}>삭제하기</button>
          <button onClick={() => handleEdit(id, title, body)}>
            {editable && clickedId === id ? (
              <span>제출하기</span>
            ) : (
              <span>수정하기</span>
            )}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default List;
